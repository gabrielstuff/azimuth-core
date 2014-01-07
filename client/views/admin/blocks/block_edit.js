Template.block_edit.templates = function() {
  return $.map(registry.blockTemplates, function(value, index) {
    return [value];
  });
}

Template.block_edit.newBlock = function (options) {
  return adminPanel.blockEdit.newBlock;
};

Template.block_edit.blockFields = function() {
  return Session.get('block_fields') ? Session.get('block_fields') : false;
}

Template.block_edit.renderField = function(field) {
  return field.name;
}

Template.block_edit.events = {
  'change .block-template-selector': function(e) {
    // Load block form in from registry
    var template = $(e.currentTarget).val();

    // Get template's fields from block registry
    Session.set('block_fields', registry.blockTemplates[template].fields);

    adminPanel.blockEdit.template = template;
  },
  'click .cancel': function() {
    adminPanel.hide();
  },
  'click .submit': function() {
    // Save a new block -- create the block and insert into the PageBlock collection
    if(adminPanel.blockEdit.newBlock) {
      var blockData = utils.getFormValues(".block-edit-form");
      blockData.created = Date.now();
      blockData.template = adminPanel.blockEdit.template;

      var block_id = Azimuth.collections.Blocks.insert(blockData);
      var block = Azimuth.collections.Blocks.findOne({_id: block_id});

      // Increment the sequence of all other blocks by one
      var page = utils.getCurrentPage();
      Azimuth.collections.PageBlocks.find({ page_id : page._id, zone: "body" }).forEach(function(pageBlock) {
        Azimuth.collections.PageBlocks.update(pageBlock._id, {$set: {seq: this.seq+1}});
      });

      Azimuth.collections.PageBlocks.insert({page_id: page._id, block_id: block_id, seq: 1, zone: adminPanel.blockEdit.zone, added: Date.now()});
    }
    // Save changes to an existing block
    else {
      var block = Azimuth.collections.Blocks.findOne({_id: adminPanel.blockEdit.blockId});
      if(block) {
        var blockData = utils.getFormValues(".edit-block-modal:visible form");
        blockData.tag = blockData.tag.split(',');
        Azimuth.collections.Blocks.update({_id: block._id}, {$set: blockData});
        noty({text: 'Block Saved.', type: 'success'});
      } else {
        noty({text: 'Error: Could not save block.', type: 'error'});
      }
    }

    adminPanel.hide();
  }
}

