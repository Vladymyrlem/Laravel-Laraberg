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
    title: "Slider",
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
        if (props.attributes.style == "left") styleClass = "text-end";
        if (props.attributes.style == "right") styleClass = "text-start";
        return (
            <div>
                <h2 class="h2">{props.attributes.section_title}</h2>
                <p class="lead">{props.attributes.section_description}</p>
                <div
                    id={props.attributes.section_id}
                    class="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div class="carousel-indicators">
                        {props.attributes.blocks
                            .sort((b1, b2) => b1 - b2)
                            .map((block, index) => (
                                <button
                                    type="button"
                                    data-bs-target={
                                        "#" + props.attributes.section_id
                                    }
                                    data-bs-slide-to={index}
                                    className={index == 0 ? "active" : ""}
                                    aria-label="Slide 1"
                                ></button>
                            ))}
                    </div>
                    <div class="carousel-inner">
                        {props.attributes.blocks
                            .sort((b1, b2) => b1 - b2)
                            .map((block, index) => (
                                <div
                                    className={
                                        "carousel-item " +
                                        (index == 0 ? "active" : "")
                                    }
                                >
                                    <img
                                        src={block.image}
                                        alt={block.title}
                                    />
                                    <div class="container">
                                        <div
                                            className={
                                                "carousel-caption " + styleClass
                                            }
                                        >
                                            <h1>{block.title}</h1>
                                            <p>{block.content}</p>
                                            <p>
                                                <a
                                                    class="btn btn-lg btn-primary"
                                                    href={block.buttonLink}
                                                >
                                                    {block.buttonText}
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target={"#" + props.attributes.section_id}
                        data-bs-slide="prev"
                    >
                        <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target={"#" + props.attributes.section_id}
                        data-bs-slide="next"
                    >
                        <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        );
    },
};
