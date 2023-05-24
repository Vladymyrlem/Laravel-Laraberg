import "./bootstrap";
import registerLarabergBlocks from "./register-blocks";

import DatasetInspectorComponent from "./blocks/DatasetInspectorComponent";

const { dispatch, select } = Laraberg.wordpress.data;

// Custom Category
export function registerCategory(title, slug) {
    let category = {
        slug: slug,
        title: title,
    };

    const currentCategories = select("core/blocks")
        .getCategories()
        .filter((item) => item.slug !== category.slug);
    dispatch("core/blocks").setCategories([category, ...currentCategories]);
}

function addAttribute(settings) {
    console.log({ settings });
    settings.attributes = {
        ...settings.attributes,
        customDatasetAttrs: {
            type: "string",
        },
    };

    return settings;
}

function addSaveProps(extraProps, blockType, attributes) {
    if (attributes.customDatasetAttrs) {
        extraProps.customDatasetAttrs = attributes.customDatasetAttrs;
    }
    return extraProps;
}

const withInspectorControl = DatasetInspectorComponent;

const { addFilter } = Laraberg.wordpress.hooks;
addFilter(
    "blocks.registerBlockType",
    "core/custom-dataset/attribute",
    addAttribute
);

// addFilter(
// 	'blocks.getSaveContent.extraProps',
// 	'core/custom-dataset/save-props',
// 	addSaveProps
// );

addFilter(
    "editor.BlockEdit",
    "core/editor/custom-dataset/with-inspector-control",
    withInspectorControl
);

import { parse } from '@wordpress/block-serialization-default-parser';

window.parseWpHtml = parse

registerCategory("Test", "test");

// registerLarabergBlocks
registerLarabergBlocks();

// Initializing Laraberg
Laraberg.init("post_content", {});
