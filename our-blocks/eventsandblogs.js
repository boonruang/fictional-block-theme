wp.blocks.registerBlockType("ourblocktheme/eventsandblogs", {
    title: "Events and Blogs",
    edit: function() {
        return wp.element.createElement("div", {className: "our-placeholder-block"}, "Events and Block placeholder")
    },
    save: function() {
        return null
    }
});