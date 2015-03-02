<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'roundhex');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'ut;zl1EJ5,K>X=Nwe V*O]Rr>y!)L%.>.*_42vCAuI3nDjNW?[(UI3^t>)))v@w)');
define('SECURE_AUTH_KEY',  'w}SVs`Eyy$t93+b(4&!^r+JL-I%/g5/*+|%LnB,VALKc>$-KqUstAAg{T^NOgBN?');
define('LOGGED_IN_KEY',    'R s7eNL92~scck.YAh $WKw~.+g8_Zd/we}~{ U[wu;*`(+Gt,|`gc`mTjFWXU*5');
define('NONCE_KEY',        ';_Vb&(d0{3Xt++2GTN1iVKK<F-?g+we{xGc9b& ?=?^e+Ft~$e/Lv2LG48-yj>Fl');
define('AUTH_SALT',        'ORia<zdLlC-pbc{8,!oAy~rza7yxGevXdR8ah{r<OJV2.ocra%NTeyC)5IWIqbzL');
define('SECURE_AUTH_SALT', 'o-In|k[]ib-}6>^F&#LI|s?cq`,J}|c)Lo:3)_<YFAQWFMa:P>$2|AIyS``bMB=Y');
define('LOGGED_IN_SALT',   ', J*8doJaS4O-(N)lgP+d#&52-1<-z|3]|{NVcy6)Dy)#z 6Z!KIT*+9a2ig&y+9');
define('NONCE_SALT',       'D!O=]iw=:9s}n|tR }-0Mn+F`^+:b.7S}#=|fIV4[qb)?IC5~iy&9SqX#Imvv6(J');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'rh_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
