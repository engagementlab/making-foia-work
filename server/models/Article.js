'use strict';
/**
 * Make FOIA Work API server
 * 
 * Article page Model
 * @module Article
 * @class Article
 * @author Johnny Richardson
 * 
 * For field docs: http://keystonejs.com/docs/database/
 *
 * ==========
 */

var keystone = global.keystone;
var Types = keystone.Field.Types;

/**
 * Article model
 * @constructor
 * See: http://keystonejs.com/docs/database/#lists-options
 */
var Article = new keystone.List('Article', 
	{
		label: 'Articles',
		singular: 'Article'
	});

/**
 * Model Fields
 * @main Article
 */
Article.add({
	
	name: { type: String, default: "Article Name", required: true, initial: true },
	description: { type: Types.Textarea, required: true, initial: true},
	url: { type: Types.Url, label: "URL to Article", required: true, initial: true}
});

/**
 * Model Registration
 */
Article.defaultSort = '-createdAt';
Article.defaultColumns = 'name';
Article.register();
