# Snippets VsCode
Alguns dos snippets mais usados na Riverlab na hora do desenvolvimento dos projetos

Em breve, mais snippets serão adicionados aqui.

```js
{
	"WP_Query": {
		"scope": "php",
		"prefix": "wp_query",
		"body": "\\$args = array();\n\n\\$query = New WP_Query(\\$args);\n\nif ( \\$query->have_posts() ) {\n\twhile ( \\$query->have_posts() ) {\n\t\t\\$query->the_post();\n\t}\n} else {\n\n}\n\nwp_reset_postdata();",
		"description": "Cria uma WP_Query Padrão do Wordpress"
	},
	"RTEAM_HEADER": {
		"scope": "php",
		"prefix": "rteam_header",
		"body": [
			"<?php",
			"/*",
			"* -------------------------------------------------------------------------------------",
			"* @author: Riverlab",
			"* @author URI: https://riverlab.org/",
			"* @copyright: (c) $CURRENT_YEAR Riverlab Team. Todos os Direitos Reservados",
			"* -------------------------------------------------------------------------------------",
			"*",
			"* @since 1.0.0",
			"*",
			"*/"
		],
		"description": "Cria o header dos arquivos da Riverlab em PHP"
	},
	"Mudar a URL Wordpress": {
		"scope": "sql,plaintext",
		"prefix": "urlwp",
		"body": [
			"UPDATE wp_options SET option_value = replace(option_value, '$1', '$2') WHERE option_name = 'home' OR option_name = 'siteurl';\nUPDATE wp_posts SET guid = replace(guid, '$1','$2');\nUPDATE wp_posts SET post_content = replace(post_content, '$1', '$2');\nUPDATE wp_postmeta SET meta_value = replace(meta_value,'$1','$2');"
		],
		"description": "Imprime a query que muda a url do wordpress"
	}
}
```
