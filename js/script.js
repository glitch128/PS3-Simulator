var ICON_SIZE = 100;
var PADDING = 70;

//todo: pull model from XHR or some

var model = {
  cursor: {
    x: 5,
    y: 6 },

  columns: {
    "Users": {
      index: 0,
      title: "Users",
      selectedIndex: 3,
      active: false,
      icon: "icons/users.png",
      items: [
			{ title: "Turn Off System", subtitle: "", active: false, icon: "icons/power.png", href: "" },
      { title: "Add User", subtitle: "", active: false, icon: "icons/add-user.png", href: "" },
      { title: "User", subtitle: "", active: true, icon: "icons/000.png", href: "" }] },


    "Settings": {
      index: 1,
      title: "Settings",
      selectedIndex: 0,
      active: false,
      icon: "icons/settings.png",
      items: [
      { title: "System Update", subtitle: "", active: false, icon: "icons/system-update.png", href:"" },
      { title: "Game Settings", subtitle: "", active: false, icon: "icons/game-settings.png", href:"" },
      { title: "Video Settings", subtitle: "", active: false, icon: "icons/video-settings.png", href: "" },
      { title: "Music Settings", subtitle: "", active: false, icon: "icons/music-settings.png", href: "" },
      { title: "Chat Settings", subtitle: "", active: false, icon: "icons/chat-settings.png", href: "" },
      { title: "System Settings", subtitle: "", active: false, icon: "icons/system-settings.png", href: "" },
      { title: "Theme Settings", subtitle: "", active: false, icon: "icons/theme-settings.png", href: "" },
      { title: "Date and Time Settings", subtitle: "", active: false, icon: "icons/time-settings.png", href: "" },
      { title: "Power Save Settings", subtitle: "", active: false, icon: "icons/power-settings.png", href: "" },
      { title: "Accessory Settings", subtitle: "", active: false, icon: "icons/acc-settings.png", href: "" },
      { title: "Printer Settings", subtitle: "", active: false, icon: "icons/print-settings.png", href: "" },
      { title: "Display Settings", subtitle: "", active: false, icon: "icons/display-settings.png", href: "" },
      { title: "Sound Settings", subtitle: "", active: false, icon: "icons/sound-settings.png", href: "" },
      { title: "Security Settings", subtitle: "", active: false, icon: "icons/privacy-settings.png", href: "" },
      { title: "Remote Play Settings", subtitle: "", active: false, icon: "icons/remote-settings.png", href: "" },
      { title: "Network Settings", subtitle: "Adjusts settings for the Internet connection.", active: false, icon: "icons/network-settings.png", href: "" },]
			 	},

    "Photo": {
      index: 2,
      title: "Photo",
      selectedIndex: 0,
      active: false,
      icon: "icons/photo.png",
      items: [
      { title: "Search for Media Servers", subtitle: "", active: false, icon: "icons/server-search.png", href:"" },
      { title: "Photo Gallery", subtitle: "", active: false, icon: "icons/photo-gallery.png", href: ""},
      { title: "Playlists", subtitle: "", active: false, icon: "icons/playlist.png", href: "" },] },


    "Music": {
      index: 3,
      title: "Music",
      selectedIndex: 0,
      active: false,
      icon: "icons/music.png",
      items: [
      { title: "Search for Media Servers", subtitle: "", active: false, icon: "icons/server-search.png" },
      { title: "Playlists", subtitle: "", active: false, icon: "icons/playlist.png", href: "" },] },


    "Video": {
      index: 4,
      title: "Video",
      selectedIndex: 0,
      active: false,
      icon: "icons/video.png",
      items: [
      { title: "BD Data Utility", subtitle: "", active: false, icon: "icons/folder.png", href: "" },
      { title: "Search for Media Servers", subtitle: "", active: false, icon: "icons/server-search.png", href:"" },
      { title: "Video Editor & Uploader", subtitle: "", active: false, icon: "icons/upload.png", href: "" },] },
		
			"Game": {
      	index: 5,
      	title: "Game",
      	selectedIndex: 0,
      	active: false,
      	icon: "icons/play.png",
      	items: [
					{ title: "PS Vita System Application Utility", subtitle: "", active: false, icon: "icons/folder.png", href: "" },
					{ title: "Game Data Utility", subtitle: "", active: false, icon: "icons/folder.png", href: "" },
					{ title: "Memory Card Utility", subtitle: "", active: false, icon: "icons/memory-card.png", href: "" },
					{ title: "Saved Data Utility (minis/PSP™)", subtitle: "", active: false, icon: "icons/folder-remote.png", href: "" },
					{ title: "Saved Data Utility (PS3™)", subtitle: "", active: false, icon: "icons/folder-game.png", href: "" },
					{ title: "PlayStation®Store", subtitle: "", active: false, icon: "icons/store-logo.png", href: "" },
					{ title: "Game", subtitle: "", active: false, icon: "album", href: "https://play.geforcenow.com/" }
      	] },
		
			"Network": {
      	index: 6,
      	title: "Network",
      	selectedIndex: 0,
      	active: false,
      	icon: "icons/network.png",
      	items: [
				{ title: "Online Instruction Manuals", subtitle: "", active: false, icon: "icons/question.png", href: "" },
					{ title: "Remote Play", subtitle: "Use a device that supports remote play (such as a PS Vita or PSP'tm' system) to operate this system over a network. Go to [Settings] > [Remote Play Settings] > [Register Device] and register the remote play device.", active: false, icon: "icons/remote.png", href: "" },
					{ title: "Internet Browser", subtitle: "", active: false, icon: "icons/www.png", href: "" },
					{ title: "Internet Search", subtitle: "", active: false, icon: "icons/search.png", href: "" },
      	] },
		
		"PlayStation™Network": {
      	index: 7,
      	title: "PlayStation™Network",
      	selectedIndex: 0,
      	active: false,
      	icon: "icons/psn.png",
      	items: [
					{ title: "Sign Up", subtitle: "", active: false, icon: "icons/sign-up.png", href: "" },
					{ title: "What's New", subtitle: "", active: false, icon: "icons/whats-new.png", href: "" },
					{ title: "Trophy Collection", subtitle: "", active: false, icon: "icons/trophy.png", href: "" },
					{ title: "PlayStation Plus", subtitle: "", active: false, icon: "icons/psplus.png", href: "" },
					{ title: "PlayStation Store", subtitle: "", active: false, icon: "icons/store-logo.png", href: "" }
      	] },

			"Friends": {
      	index: 8,
      	title: "Friends",
      	selectedIndex: 0,
      	active: false,
      	icon: "icons/friends.png",
      	items: [
				{ title: "", subtitle: "", active: false, icon: "", href: "" }
      	] }
	} };





//add zero position to each column and item
_.each(model.columns, c => {
  c.position = { x: 0, y: 0 };
  _.each(c.items, i => {
    i.position = {
      x: 0,
      y: 0 };

  });
});

var xmbVue = new Vue({
  el: "#xmb",
  data: model,
  methods: {
    handleKey: function (dir, val) {
      this.cursor[dir] += val;
      var nCols = this.nColumns;

      // wrap x
      this.cursor.x = this.cursor.x % nCols;
      if (this.cursor.x < 0) {
        this.cursor.x = this.cursor.x + nCols;
      }

      //wrap y
      var nRows = this.nRows;
      this.cursor.y = this.cursor.y % nRows;
      if (this.cursor.y < 0) {
        this.cursor.y = this.cursor.y + nRows;
      }

      this.highlightCell(this.cursor.x, this.cursor.y);

    },
    highlightCell: function (column, row) {

      console.log(column, row);
      //update position of elements as well
      var xAccum = (-column - 1) * (ICON_SIZE + PADDING);
      if (column == 0) {
        xAccum += ICON_SIZE + PADDING;
      }
      var yAccum;

      _.each(this.columns, (col, colKey) => {
        col.active = false;
        yAccum = -(ICON_SIZE + PADDING) * (row + 1);

        col.position.x = xAccum;
        xAccum += ICON_SIZE + PADDING;
        if (column === col.index || column === col.index + 1) {
          xAccum += ICON_SIZE / 2;
        }

        _.each(col.items, (item, rowN) => {
          if (rowN == row && col.index == column) {
            item.active = true;
            col.active = true;
          } else {
            item.active = false;
          }

          if (rowN == row) {
            yAccum += ICON_SIZE + PADDING;
          }
          yAccum += ICON_SIZE + PADDING;
          item.position.y = yAccum;

        });
      });
      this.cursor.y = row;
      this.cursor.x = column;
    } },

  watch: {
    cursor: function (e) {
      console.log('cursor mutated', e);
    } },

  computed: {
    nColumns: function () {
      return Object.keys(this.columns).length;
    },
    nRows: function () {
      //get the row at the current index
      var row = this.columnsArray[this.cursor.x];
      if (!row) {
        console.log('invalid row index: ', this.cursor.x);
        return 0;
      }
      return row.items.length; //todo: number of columns in this row
    },
    columnsArray: function () {
      //get columns in an array
      var arr = [];
      Object.keys(this.columns).forEach(key => {
        arr.push(this.columns[key]);
      });
      return _.sortBy(arr, 'index');
    } },

  created: function () {
    _.each(this.columns, column => {
      _.each(column.items, item => {
        item.active = false;
      });
    });
    this.highlightCell(this.cursor.x, this.cursor.y);
  } });


// handle movement based on keys
$('body').on('keyup', function (e) {
  if (e.key == "ArrowUp") {
    xmbVue.handleKey('y', -1);
  } else if (e.key == "ArrowDown") {
    xmbVue.handleKey('y', 1);
  } else if (e.key == "ArrowLeft") {
    xmbVue.handleKey('x', -1);
  } else if (e.key == "ArrowRight") {
    xmbVue.handleKey('x', 1);
  }
});

$('body').on("mousewheel", _.throttle(scrollHandler, 10));

function scrollHandler(e) {
  console.log(e);
  if (e.deltaX) {
    xmbVue.handleKey('x', Math.sign(e.deltaX));
  }
  if (e.deltaY) {
    xmbVue.handleKey('y', Math.sign(e.deltaY));
  }
};

$('body').on('keyup', function (e) {
	if (e.key == "Enter") {
		linkforward();
	}
})

function linkforward() {
	location.href = document.getElementsByClassName('.submenu.active').href
	};

function display_c(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
var x = new Date().toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'})
var y = new Date().toLocaleDateString('en-GB', {month:'numeric', day: 'numeric'})
document.getElementById('ct').innerHTML = y + ' ' +x;
display_c();
 }
