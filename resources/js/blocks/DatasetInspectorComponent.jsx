const {
	RichText,
	InspectorControls,
	useBlockProps,
} = Laraberg.wordpress.blockEditor;

const { TextControl } = Laraberg.wordpress.components;
import { createHigherOrderComponent } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
// const { createHigherOrderComponent } = Laraberg.wordpress.compose;

export default createHigherOrderComponent(
	( BlockEdit ) => {
		return ( props ) => {
            console.log(props)
            return (
                <>
                    <BlockEdit { ...props } />
                    <InspectorControls __experimentalGroup="advanced">
                        <TextControl
                            autoComplete="off"
                            label={ __( 'Additional dataset attributes tags' ) }
                            value={ props.attributes.customDatasetAttrs || '' }
                            onChange={ ( nextValue ) => {
                                props.setAttributes( {customDatasetAttrs: nextValue} );
                            } }
                            help={ __(
                                'Enter all the dataset values.'
                            ) }
                        />
                    </InspectorControls>
                </>
            );

		};
	},
	'withInspectorControl'
);
