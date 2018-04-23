import { NavigableToolbar } from '../../editor/components';
import { IconButton } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const ModalHeader = ( { icon, title, onClose, closeLabel } ) => {
	const label = closeLabel ? closeLabel : __( 'Close window' );

	return (
		<NavigableToolbar
			className={ 'edit-post-plugin-screen-takeover__editor-screen-takeover-header' }
		>
			<div>
				<span aria-hidden="true">
					{ icon }
				</span>
				<h1 id="modalID" >
					{ title }
				</h1>
			</div>
			<IconButton
				onClick={ onClose }
				icon="no-alt"
				label={ label }
			/>
		</NavigableToolbar>
	);
};

export default ModalHeader;