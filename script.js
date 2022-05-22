var audio_volume = 0.3;
var sample1 = [
  { num: 1, time: 150 },
  { num: 1, time: 265 },
  { num: 5, time: 380 },
  { num: 5, time: 501 },
  { num: 6, time: 625 },
  { num: 6, time: 748 },
  { num: 5, time: 871 },
  { num: 4, time: 1126 },
  { num: 4, time: 1247 },
  { num: 3, time: 1365 },
  { num: 3, time: 1477 },
  { num: 2, time: 1597 },
  { num: 2, time: 1714 },
  { num: 1, time: 1837 }
];
var sample2 = [
  { num: 3, time: 105 },
  { num: 3, time: 223 },
  { num: 4, time: 331 },
  { num: 5, time: 482 },
  { num: 5, time: 565 },
  { num: 4, time: 673 },
  { num: 3, time: 782 },
  { num: 2, time: 893 },
  { num: 1, time: 1006 },
  { num: 1, time: 1113 },
  { num: 2, time: 1220 },
  { num: 3, time: 1337 },
  { num: 3, time: 1456 },
  { num: 2, time: 1623 },
  { num: 2, time: 1680 },
  { num: 3, time: 1883 },
  { num: 3, time: 1988 },
  { num: 4, time: 2107 },
  { num: 5, time: 2218 },
  { num: 5, time: 2337 },
  { num: 4, time: 2446 },
  { num: 3, time: 2555 },
  { num: 2, time: 2664 },
  { num: 1, time: 2771 },
  { num: 1, time: 2880 },
  { num: 2, time: 2992 },
  { num: 3, time: 3103 },
  { num: 2, time: 3220 },
  { num: 1, time: 3395 },
  { num: 1, time: 3449 }
];
var sample3 = [
  { num: 10, time: 161 },
  { num: 1, time: 167 },
  { num: 12, time: 269 },
  { num: 5, time: 269 },
  { num: 15, time: 365 },
  { num: 5, time: 472 },
  { num: 2, time: 571 },
  { num: 12, time: 571 },
  { num: 5, time: 684 },
  { num: 13, time: 684 },
  { num: 12, time: 788 },
  { num: 5, time: 901 },
  { num: 3, time: 1000 },
  { num: 8, time: 1069 },
  { num: 10, time: 1107 },
  { num: 5, time: 1110 },
  { num: 12, time: 1182 },
  { num: 15, time: 1218 },
  { num: 14, time: 1322 },
  { num: 5, time: 1325 },
  { num: 13, time: 1399 },
  { num: 2, time: 1426 },
  { num: 12, time: 1426 },
  { num: 5, time: 1525 },
  { num: 4, time: 1632 },
  { num: 2, time: 1734 },
  { num: 1, time: 1828 },
  { num: 13, time: 1836 },
  { num: 13, time: 1899 },
  { num: 13, time: 1930 },
  { num: 4, time: 1932 },
  { num: 13, time: 1995 },
  { num: 13, time: 2039 },
  { num: 15, time: 2105 },
  { num: 4, time: 2144 },
  { num: 14, time: 2144 },
  { num: 13, time: 2210 },
  { num: 1, time: 2246 },
  { num: 12, time: 2248 },
  { num: 5, time: 2347 },
  { num: 5, time: 2555 },
  { num: 2, time: 2652 },
  { num: 13, time: 2652 },
  { num: 12, time: 2707 },
  { num: 5, time: 2743 },
  { num: 13, time: 2751 },
  { num: 12, time: 2813 },
  { num: 9, time: 2854 },
  { num: 10, time: 2958 },
  { num: 5, time: 2961 },
  { num: 1, time: 3063 },
  { num: 8, time: 3066 },
  { num: 5, time: 3165 },
  { num: 1, time: 3277 },
  { num: 4, time: 3486 },
  { num: 12.5, time: 3489 },
  { num: 4, time: 3554 },
  { num: 12.5, time: 3563 },
  { num: 4, time: 3587 },
  { num: 4, time: 3671 },
  { num: 12.5, time: 3674 },
  { num: 3, time: 3898 },
  { num: 12, time: 3898 },
  { num: 3, time: 3965 },
  { num: 12, time: 3965 },
  { num: 3, time: 3995 },
  { num: 12, time: 3996 },
  { num: 3, time: 4067 },
  { num: 12, time: 4069 },
  { num: 11, time: 4302 },
  { num: 2, time: 4304 },
  { num: 11, time: 4402 },
  { num: 2, time: 4456 },
  { num: 11, time: 4506 },
  { num: 9, time: 4601 },
  { num: 2, time: 4601 },
  { num: 10, time: 4665 },
  { num: 1, time: 4704 },
  { num: 2, time: 4814 },
  { num: 3, time: 4916 },
  { num: 1, time: 5012 },
  { num: 8, time: 5122 },
  { num: 1, time: 5122 },
  { num: 15, time: 5219 },
  { num: 5, time: 5289 },
  { num: 14, time: 5335 },
  { num: 5, time: 5422 },
  { num: 12, time: 5424 },
  { num: 13, time: 5489 },
  { num: 2, time: 5523 },
  { num: 4, time: 5626 },
  { num: 5, time: 5725 },
  { num: 13, time: 5790 },
  { num: 14, time: 5833 },
  { num: 15, time: 5883 },
  { num: 15, time: 6037 },
  { num: 5, time: 6092 },
  { num: 14, time: 6137 },
  { num: 13, time: 6237 },
  { num: 12, time: 6345 },
  { num: 4, time: 6440 },
  { num: 3, time: 6545 },
  { num: 2, time: 6653 },
  { num: 1, time: 6739 },
  { num: 15, time: 6743 },
  { num: 14, time: 6813 },
  { num: 5, time: 6845 },
  { num: 15, time: 6847 },
  { num: 12, time: 6905 },
  { num: 10, time: 6952 },
  { num: 15, time: 7014 },
  { num: 3, time: 7050 },
  { num: 14, time: 7108 },
  { num: 2, time: 7150 },
  { num: 4, time: 7251 },
  { num: 5, time: 7351 },
  { num: 12, time: 7457 },
  { num: 12, time: 7520 },
  { num: 4, time: 7553 },
  { num: 13, time: 7553 },
  { num: 5, time: 7766 },
  { num: 14, time: 7766 },
  { num: 15, time: 7980 },
  { num: 3, time: 8086 },
  { num: 1, time: 8188 }
];

var soundpack = [];
var soundpack_index = [
  1,
  1.5,
  2,
  2.5,
  3,
  3.5,
  4,
  4.5,
  5,
  5.5,
  6,
  6.5,
  7,
  8,
  8.5,
  9,
  9.5,
  10,
  11,
  11.5,
  12,
  12.5,
  13,
  13.5,
  14,
  15
];
for (var i = 0; i < soundpack_index.length; i++) {
  soundpack.push({
    number: soundpack_index[i],
    url:
      "https://awiclass.monoame.com/pianosound/set/" +
      soundpack_index[i] +
      ".wav"
  });
}

var vm = new Vue({
  el: "#app",
  data: {
    sounddata: soundpack,
    notes: [],
    now_note_id: 0,
    next_note_id: 0,
    playing_time: 0,
    record_time: 0,
    now_press_key: -1,
    player: null,
    recorder: null,
    display_keys: [
      { num: 1, key: 90, type: "white" },
      { num: 1.5, key: 83, type: "black" },
      { num: 2, key: 88, type: "white" },
      { num: 2.5, key: 68, type: "black" },
      { num: 3, key: 67, type: "white" },
      { num: 4, key: 86, type: "white" },
      { num: 4.5, key: 71, type: "black" },
      { num: 5, key: 66, type: "white" },
      { num: 5.5, key: 72, type: "black" },
      { num: 6, key: 78, type: "white" },
      { num: 6.5, key: 74, type: "black" },
      { num: 7, key: 77, type: "white" },
      { num: 8, key: 81, type: "white" },
      { num: 8.5, key: 50, type: "black" },
      { num: 9, key: 87, type: "white" },
      { num: 9.5, key: 51, type: "black" },
      { num: 10, key: 69, type: "white" },
      { num: 11, key: 82, type: "white" },
      { num: 11.5, key: 53, type: "black" },
      { num: 12, key: 84, type: "white" },
      { num: 12.5, key: 54, type: "black" },
      { num: 13, key: 89, type: "white" },
      { num: 13.5, key: 55, type: "black" },
      { num: 14, key: 85, type: "white" },
      { num: 15, key: 73, type: "white" }
    ]
  },
  methods: {
    playnote: function (id, volume) {
      if (id > 0) {
        var audio_obj = $("audio[data-num='" + id + "']")[0];
        audio_obj.volume = volume;
        audio_obj.currentTime = 0;
        audio_obj.play();
      }
    },
    playnext: function (volume) {
      var play_note = this.notes[this.now_note_id].num;
      this.playnote(play_note, volume);
      this.now_note_id++;
      console.log(this.now_note_id);
      if (this.now_note_id == this.notes.length) {
        this.stopplay();
      }
    },
    start_record: function () {
      this.notes = [];
      this.record_time = 0;
      this.recorder = setInterval(function () {
        vm.record_time++;
      });
    },
    stop_record: function () {
      clearInterval(this.recorder);
      this.record_time = 0;
    },
    startplay: function () {
      this.now_note_id = 0;
      this.playing_time = 0;
      this.now_next_id = 0;
      this.next_note;
      var vobj = this;
      this.player = setInterval(function () {
        if (vobj.next_note_id == vobj.notes.length) {
          vobj.stopplay();
        }
        if (vobj.playing_time >= vobj.notes[vobj.next_note_id].time) {
          vobj.playnext(audio_volume);
          vobj.next_note_id++;
        }
        vobj.playing_time++;
      });
    },
    stopplay: function () {
      clearInterval(this.player);
      this.now_note_id = 0;
      this.playing_time = 0;
      this.next_note_id = 0;
    },
    get_current_highlight: function (id, skey) {
      if (this.now_press_key == skey) return true;
      if (this.playing_time <= 1) return false;
      if (this.notes.length == 0) return false;
      var cur_id = this.now_note_id - 1;
      if (cur_id < 0) cur_id = 0;
      var num = this.notes[cur_id].num;
      if (num == id) return true;
      return false;
    },
    addnote: function (id) {
      if (this.record_time > 0) {
        this.notes.push({ num: id, time: this.record_time });
      }
      this.playnote(id, audio_volume);
    },
    load_sample: function () {
      var vobj = this;
      $.ajax({
        url:
          "https://awiclass.monoame.com/api/command.php?type=get&name=music_dodoro",
        success: function (res) {
          vobj.notes = JSON.parse(res);
        }
      });
    }
  }
});

$(window).keydown(function (e) {
  var key = e.which;
  vm.now_press_key = key;
  // console.log(key);
  for (var i = 0; i < vm.display_keys.length; i++) {
    if (key == vm.display_keys[i].key) {
      vm.addnote(vm.display_keys[i].num);
    }
  }
});
$(window).keyup(function () {
  vm.now_press_key = -1;
});

$(".pic1").click(function () {
  vm.notes = sample1;
});
$(".pic2").click(function () {
  vm.notes = sample2;
});
$(".pic3").click(function () {
  vm.notes = sample3;
});