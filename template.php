<?php

/**
 * @file
 * Preprocess and Process Functions.
 */

/**
 * Implements hook_preprocess_html().
 */
function kulturrummet_preprocess_html(&$vars) {
  drupal_add_js(array('pathToTheme' => array('pathToTheme' => path_to_theme())), 'setting');
}


/**
 * Implements hook_css_alter().
 */
function kulturrummet_css_alter(&$css) {
  // Remove 2column panel default stylesheets
  unset($css[drupal_get_path('module', 'panels') . '/plugins/layouts/twocol/twocol.css']);
}
