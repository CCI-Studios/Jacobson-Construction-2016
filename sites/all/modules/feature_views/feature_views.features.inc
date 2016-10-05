<?php
/**
 * @file
 * feature_views.features.inc
 */

/**
 * Implements hook_views_api().
 */
function feature_views_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function feature_views_image_default_styles() {
  $styles = array();

  // Exported image style: catalogue.
  $styles['catalogue'] = array(
    'label' => 'Catalogue',
    'effects' => array(
      4 => array(
        'name' => 'image_scale',
        'data' => array(
          'width' => 300,
          'height' => 300,
          'upscale' => 0,
        ),
        'weight' => 1,
      ),
    ),
  );

  // Exported image style: catalogue_detail.
  $styles['catalogue_detail'] = array(
    'label' => 'Catalogue Detail',
    'effects' => array(
      5 => array(
        'name' => 'manualcrop_crop_and_scale',
        'data' => array(
          'width' => 470,
          'height' => 350,
          'upscale' => 0,
          'respectminimum' => 1,
          'onlyscaleifcrop' => 0,
          'style_name' => 'catalogue_detail',
        ),
        'weight' => 0,
      ),
    ),
  );

  // Exported image style: catalogue_thumbnail.
  $styles['catalogue_thumbnail'] = array(
    'label' => 'catalogue thumbnail',
    'effects' => array(
      3 => array(
        'name' => 'manualcrop_crop_and_scale',
        'data' => array(
          'width' => 60,
          'height' => 40,
          'upscale' => 0,
          'respectminimum' => 1,
          'onlyscaleifcrop' => 0,
          'style_name' => 'catalogue_thumbnail',
        ),
        'weight' => 0,
      ),
    ),
  );

  // Exported image style: gallery.
  $styles['gallery'] = array(
    'label' => 'Gallery',
    'effects' => array(
      1 => array(
        'name' => 'manualcrop_crop_and_scale',
        'data' => array(
          'width' => 290,
          'height' => 300,
          'upscale' => 0,
          'respectminimum' => 1,
          'onlyscaleifcrop' => 0,
          'style_name' => 'gallery',
        ),
        'weight' => 0,
      ),
    ),
  );

  return $styles;
}
