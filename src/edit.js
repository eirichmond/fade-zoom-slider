/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";

import { Button } from "@wordpress/components";
import { Fragment } from "@wordpress/element";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { images } = attributes;

	const onSelectImages = (newImages) => {
		setAttributes({ images: newImages });
	};

	const removeImage = (index) => {
		const newImages = images.filter((img, i) => i !== index);
		setAttributes({ images: newImages });
	};

	const blockProps = useBlockProps();

	return (
		<div {...useBlockProps()}>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={onSelectImages}
					allowedTypes={["image"]}
					multiple
					gallery
					value={images.map((img) => img.id)}
					render={({ open }) => (
						<Button
							onClick={open}
							isPrimary
						>
							{images.length === 0
								? "Upload Images"
								: "Edit Images"}
						</Button>
					)}
				/>
			</MediaUploadCheck>
			{/* <div className="slider">
				<div className="slides"> */}
			{images.map((img, index) => (
				<Fragment key={img.id}>
					<div
						className="slide"
						key={img.id}
					>
						<img
							src={img.url}
							alt={img.alt}
						/>
						<Button
							isDestructive
							onClick={() => removeImage(index)}
						>
							Remove
						</Button>
					</div>
				</Fragment>
			))}
			{/* </div>
			</div> */}
		</div>
	);
}
