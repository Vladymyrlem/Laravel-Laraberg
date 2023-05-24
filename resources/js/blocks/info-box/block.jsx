const { BlockControls, URLInputButton, MediaPlaceholder } =
    Laraberg.wordpress.blockEditor;
const {
    Toolbar,
    TextControl,
    TextareaControl,
    SelectControl,
    Card,
    CardHeader,
} = Laraberg.wordpress.components;
const { Component } = Laraberg.wordpress.element;

const style_options = [
    {
        value: "left",
        label: "Left Content, Right Image",
    },
    {
        value: "right",
        label: "Right Content, Left Image",
    },
];

export default {
    title: "Info Box",
    category: "test",
    attributes: {
        title: {
            type: "string",
            default: "",
        },
        description: {
            type: "string",
            default: "",
        },
        image: {
            type: "string",
            default: "",
        },
        buttonText: {
            type: "string",
            default: "",
        },
        buttonLink: {
            type: "string",
            default: "",
        },
        style: {
            type: "string",
            default: "left",
        },
    },
    edit: class extends Component {
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
                                    label="Title :"
                                    value={attributes.title || ""}
                                    onChange={(text) =>
                                        this.props.setAttributes({
                                            title: text,
                                        })
                                    }
                                />

                                <TextareaControl
                                    label="Description :"
                                    value={attributes.description || ""}
                                    help="Enter description"
                                    onChange={(text) =>
                                        this.props.setAttributes({
                                            description: text,
                                        })
                                    }
                                />

                                <TextControl
                                    label="Image Url :"
                                    value={attributes.image || ""}
                                    onChange={(text) =>
                                        this.props.setAttributes({
                                            image: text,
                                        })
                                    }
                                />

                                <TextControl
                                    label="Button Text :"
                                    value={attributes.buttonText || ""}
                                    onChange={(text) =>
                                        this.props.setAttributes({
                                            buttonText: text,
                                        })
                                    }
                                />

                                <TextControl
                                    label="Button Url :"
                                    value={attributes.buttonLink || ""}
                                    onChange={(text) =>
                                        this.props.setAttributes({
                                            buttonLink: text,
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
                            </div>
                        </Card>
                    )}
                </div>
            );
        }
    },
    save: function (props) {
        if (props.attributes.style == "right") {
            return (
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col-4 d-none d-lg-block">
                        <img
                            class="img-fluid"
                            height="300"
                            src={props.attributes.image}
                            alt={props.attributes.title}
                        />
                    </div>
                    <div class="col-8 p-4 d-flex flex-column position-static">
                        <h3 class="mb-0">{props.attributes.title}</h3>
                        <p class="card-text mb-auto">
                            {props.attributes.description}
                        </p>
                        <a
                            href={props.attributes.buttonLink}
                            class="stretched-link"
                        >
                            {props.attributes.buttonText}
                        </a>
                    </div>
                </div>
            );
        } else if (props.attributes.style == "left") {
            return (
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col-8 p-4 d-flex flex-column position-static">
                        <h3 class="mb-0">{props.attributes.title}</h3>
                        <p class="card-text mb-auto">
                            {props.attributes.description}
                        </p>
                        <a
                            href={props.attributes.buttonLink}
                            class="stretched-link"
                        >
                            {props.attributes.buttonText}
                        </a>
                    </div>
                    <div class="col-4 d-none d-lg-block">
                        <img
                            class="img-fluid"
                            height="300"
                            src={props.attributes.image}
                            alt={props.attributes.title}
                        />
                    </div>
                </div>
            );
        }
    },
};
