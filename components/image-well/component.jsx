import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styled';
import { DefaultThemeProvider } from '../DefaultThemeProvider';

const ImageWell = ({
	children,
	previewUrl,
	fitPreviewToSquare,
	onSelectImage,
	onRemoveImage,
	localizedResources,
}) => {
	const handleIconClick = (e, cb) => {
		e.stopPropagation();
		cb();
	};

	if (previewUrl) {
		return (
			<ImageWellBase onClick={onSelectImage} previewUrl={previewUrl}>
				<Styled.WellPreview
					style={{
						backgroundImage: `url(${previewUrl})`,
						backgroundSize: fitPreviewToSquare ? 'cover' : 'contain',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}
				>
					{onRemoveImage ? (
						<Styled.RemoveIconContainer onClick={e => handleIconClick(e, onRemoveImage)}>
							<Styled.X />
						</Styled.RemoveIconContainer>
					) : (
						<Styled.CameraIconContainer onClick={e => handleIconClick(e, onSelectImage)}>
							<Styled.EditCamera />
						</Styled.CameraIconContainer>
					)}
				</Styled.WellPreview>
			</ImageWellBase>
		);
	}

	return (
		<ImageWellBase onClick={onSelectImage} previewUrl={previewUrl}>
			{children ? (
				children
			) : (
				<>
					<Styled.Camera />
					{localizedResources.addText}
				</>
			)}
		</ImageWellBase>
	);
};

const ImageWellBase = props => (
	<DefaultThemeProvider>
		<Styled.WellContainer>
			<Styled.WellButton {...props} />
		</Styled.WellContainer>
	</DefaultThemeProvider>
);

ImageWell.propTypes = {
	previewUrl: PropTypes.string,
	fitPreviewToSquare: PropTypes.bool,
	onSelectImage: PropTypes.function,
	onRemoveImage: PropTypes.function,
	localizedResources: PropTypes.shape({
		addText: PropTypes.string,
	}),
};

ImageWell.defaultProps = {
	localizedResources: {
		addText: '+ Add Image',
	},
};

export { ImageWell };
