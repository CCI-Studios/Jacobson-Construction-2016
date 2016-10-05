<div class="banner-inner-image">
<?php
$field = field_get_items('node', $node, 'field_banner_image_catalogue');
$bannerImage = field_view_value('node', $node, 'field_banner_image_catalogue', $field[0]);
print render($bannerImage);
?>
</div>

<h2>Catalogue Detail</h2>
<?php
print views_embed_view('catalogue_detail','block', $node->nid);
?>