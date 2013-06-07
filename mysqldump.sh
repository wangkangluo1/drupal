case $1 in
	"backup")
		/opt/lampp/bin/mysqldump drupal > /opt/lampp/htdocs/drupal/drupal.sql;;
	"restore")
		/opt/lampp/bin/mysql -e "use drupal; source /opt/lampp/htdocs/drupal/drupal.sql;";;
        *)
		echo "backup    backup the mysql to drupal.sql."
                echo "restore   restore the drupal.sql to database drupal."
                ;;
esac
