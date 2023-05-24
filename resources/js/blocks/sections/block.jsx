const { BlockControls, URLInputButton, MediaPlaceholder } =
    Laraberg.wordpress.blockEditor;
const {
    Toolbar,
    TextControl,
    TextareaControl,
    SelectControl,
    Card,
    CardHeader,
    PanelBody,
    Panel,
    Button,
} = Laraberg.wordpress.components;
const { Component } = Laraberg.wordpress.element;

const style_options = [
    {
        value: "left",
        label: "Left Content",
    },
    {
        value: "center",
        label: "Center Content",
    },
    {
        value: "right",
        label: "Right Content",
    },
];

export default {
    title: "Sections",
    category: "test",
    attributes: {
        section_id: {
            type: "string",
            default: "",
        },
        section_title: {
            type: "string",
            default: "",
        },
        section_description: {
            type: "string",
            default: "",
        },
        blocks: {
            type: "array",
            default: [],
        },
        style: {
            type: "string",
            default: "left",
        },
    },
    edit: class extends Component {
        addBlock() {
            let blocks = this.props.attributes.blocks;
            this.props.setAttributes({
                blocks: [
                    ...blocks,
                    {
                        title: "",
                        content: "",
                        image: "",
                        buttonText: "",
                        buttonLink: "",
                        sequence: "",
                    },
                ],
            });
        }
        updateBlockData(text, index, key, datatype = "text") {
            let updated_blocks = [...this.props.attributes.blocks];
            if (datatype == "text") updated_blocks[index][key] = text;
            else if (datatype == "number")
                updated_blocks[index][key] = parseInt(text);
            this.props.setAttributes({ blocks: updated_blocks });
        }
        removeBlock(index) {
            let blocks = this.props.attributes.blocks;
            blocks = blocks.filter(
                (currentBlock, blockIndex) => blockIndex !== index
            );
            this.props.setAttributes({ blocks });
        }
        renderBlocks() {
            return this.props.attributes.blocks.map((block, index) => {
                return (
                    <Panel
                        key={index}
                        className={["panel" + index, "panel-body"]}
                    >
                        <PanelBody
                            title={"Block " + (index + 1) + " : " + block.title}
                            initialOpen={false}
                            key={index}
                        >
                            <TextControl
                                label="Title :"
                                value={block.title}
                                help="Enter title for the block"
                                onChange={(text) =>
                                    this.updateBlockData(text, index, "title")
                                }
                            />
                            <TextareaControl
                                label="Content :"
                                value={block.content}
                                help="Enter content for the block"
                                onChange={(text) =>
                                    this.updateBlockData(text, index, "content")
                                }
                            />

                            <TextControl
                                label="Image Url :"
                                value={block.image}
                                onChange={(text) =>
                                    this.updateBlockData(text, index, "image")
                                }
                            />

                            <TextControl
                                label="Button Text :"
                                value={block.buttonText}
                                onChange={(text) =>
                                    this.updateBlockData(
                                        text,
                                        index,
                                        "buttonText"
                                    )
                                }
                            />
                            <TextControl
                                label="Button Link :"
                                value={block.buttonLink}
                                onChange={(text) =>
                                    this.updateBlockData(
                                        text,
                                        index,
                                        "buttonLink"
                                    )
                                }
                            />

                            <TextControl
                                label="Sequence :"
                                value={block.sequence}
                                type="number"
                                hint="Only supports integers"
                                onChange={(text) =>
                                    this.updateBlockData(
                                        text,
                                        index,
                                        "sequence",
                                        "number"
                                    )
                                }
                            />

                            <Button
                                style={{
                                    color: "red",
                                    boxShadow: "inset 0 0 0 1px red",
                                }}
                                isSecondary
                                isSmall
                                onClick={() => this.removeBlock(index)}
                            >
                                Remove Block
                            </Button>
                        </PanelBody>
                    </Panel>
                );
            });
        }
        render() {
            const { attributes, setAttributes } = this.props;
            return (
                <div>
                    {this.props.attributes.preview ? (
                        renderSave(this.props)
                    ) : (
                        <Card>
                            <CardHeader>Info Box</CardHeader>
                            <div className="content p-2">
                                <TextControl
                                    label="Section Id :"
                                    value={attributes.section_id || ""}
                                    onChange={(text) =>
                                        this.props.setAttributes({
                                            section_id: text,
                                        })
                                    }
                                />
                                <TextControl
                                    label="Section Title :"
                                    value={attributes.section_title || ""}
                                    onChange={(text) =>
                                        this.props.setAttributes({
                                            section_title: text,
                                        })
                                    }
                                />

                                <TextareaControl
                                    label="Section Description :"
                                    value={attributes.section_description || ""}
                                    help="Enter description"
                                    onChange={(text) =>
                                        this.props.setAttributes({
                                            section_description: text,
                                        })
                                    }
                                />

                                <SelectControl
                                    label={"Block Style :"}
                                    value={attributes.style}
                                    onChange={(val) =>
                                        this.props.setAttributes({ style: val })
                                    }
                                    options={style_options}
                                />
                                {this.renderBlocks()}
                                <div className="add-button mt-2">
                                    <Button
                                        isSecondary
                                        isSmall
                                        // onClick={() => this.addBlock.bind(this)}
                                        onClick={() => this.addBlock()}
                                    >
                                        Add Block
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    )}
                </div>
            );
        }
    },
    save: function (props) {
        let styleClass = "";
        if (props.attributes.style == "left") styleClass = "text-start";
        if (props.attributes.style == "right") styleClass = "text-end";
        if (props.attributes.style == "center") styleClass = "text-center";
        return (
            <div id={props.attributes.section_id}>
                <h2 class="h2">{props.attributes.section_title}</h2>
                <p class="lead">{props.attributes.section_description}</p>
                <div class="container">
                    <div class="row">
                        {props.attributes.blocks
                            .sort((b1, b2) => b1 - b2)
                            .map((block, index) => (
                                <div className={"col-lg-4 " + styleClass}>
                                    <div class="border rounded p-5">
                                    <div class="mb-4 text-center">
                                        <img src={block.image} alt={block.title} />
                                    </div>
                                    <h2>{block.title}</h2>
                                    <p>{block.content}</p>
                                    <p>
                                        <a
                                            class="btn btn-secondary"
                                            href={block.buttonLink}
                                        >
                                            {block.buttonText}
                                        </a>
                                    </p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        );
    },
};
