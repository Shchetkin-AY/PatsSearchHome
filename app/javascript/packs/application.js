// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails


import "@hotwired/turbo-rails"
import "app/javascript/controllers"
import "bootstrap";
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels").start
import("sb-admin-2")