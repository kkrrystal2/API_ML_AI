function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds();


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

var t = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
};

module.exports = {
    formatTime: function(e) {
        var n = e.getFullYear(), o = e.getMonth() + 1, i = e.getDate(), r = e.getHours(), g = e.getMinutes(), u = e.getSeconds();
        return [ n, o, i ].map(t).join("/") + " " + [ r, g, u ].map(t).join(":");
    },
    get_tip_infos: function() {
        console.log("get_tip_infos");
    }
};