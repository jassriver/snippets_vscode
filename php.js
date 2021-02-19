{
	// Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
	// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope 
	// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
	// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: 
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. 
	// Placeholders with the same ids are connected.
	// Example:
	"WP_Query": {
		"scope": "php, html",
		"prefix": "wp_query",
		"body": "\\$args = array();\n\n\\$query = New WP_Query(\\$args);\n\nif ( \\$query->have_posts() ) {\n\twhile ( \\$query->have_posts() ) {\n\t\t\\$query->the_post();\n\t}\n} else {\n\n}\n\nwp_reset_postdata();",
		"description": "Cria uma WP_Query Padrão do Wordpress"
	},
	"RTEAM_HEADER": {
		"scope": "php, html",
		"prefix": "rteam_header",
		"body": [
			"<?php",
			"/*",
			"* -------------------------------------------------------------------------------------",
			"* @author: Riverlab",
			"* @author URI: https://riverlab.org/",
			"* @copyright: (c) 2021 Riverlab Team. Todos os Direitos Reservados",
			"* -------------------------------------------------------------------------------------",
			"*",
			"* @since 1.0.0",
			"*",
			"*/"
		],
		"description": "Cria o header dos arquivos da Riverlab em PHP"
	}
}
