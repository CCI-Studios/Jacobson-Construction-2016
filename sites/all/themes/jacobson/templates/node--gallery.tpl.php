<div class="banner-inner-image">
<?php
$field = field_get_items('node', $node, 'field_banner_image_gallery');
$bannerImage = field_view_value('node', $node, 'field_banner_image_gallery', $field[0]);
print render($bannerImage);
?>
</div>
<?php 
print views_embed_view('gallery_images','block_1', $node->nid);
?>