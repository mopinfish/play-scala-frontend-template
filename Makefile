help:
	@echo "コマンド："
	@echo "  make help 						ヘルプを表示"
	@echo "  make run  						アプリケーショを起動"
	@echo "  make assets-compile	Assetsファイル群をコンパイル"
	@echo "  make assets-watch 		Assetsファイル群の変更を監視 && 即時反映"
assets-compile:
	cd app/assets && webpack
assets-watch:
	cd app/assets && webpack --watch
run:
	sbt -Dhttp.port=9900 run
