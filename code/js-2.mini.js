if(typeof koe_clicked==='undefined'&&document.querySelector('#koe_msg')===null){koe_clicked=true;if(document.querySelector('#koe_video')===null){var koe_msg=document.createElement('p');koe_msg.innerText='正在去世';koe_msg.setAttribute('id','koe_msg');koe_msg.setAttribute('style','position:fixed;top:0;left:0;width:130px;height:30px;line-height:30px;text-align:center;background-color:#000;color:#FFF;font-size:26px;z-index:99999999');document.body.appendChild(koe_msg);var koe_played=true;var koe_video=document.createElement('video');koe_video.setAttribute('id','koe_video');koe_video.setAttribute('autoplay','');koe_video.setAttribute('name','media');koe_video.addEventListener('canplaythrough',function(){koe_msg.remove();document.body.setAttribute('style','filter: grayscale(100%); -moz-filter: grayscale(100%); -o-filter: grayscale(100%); -webkit-filter: grayscale(100%);');koe_clicked=false});koe_video.addEventListener('pause',function(){document.body.setAttribute('style','');koe_played=false;koe_clicked=false});koe_video.addEventListener('play',function(){document.body.setAttribute('style','filter: grayscale(100%); -moz-filter: grayscale(100%); -o-filter: grayscale(100%); -webkit-filter: grayscale(100%);');koe_played=true;koe_clicked=false});var koe_source=document.createElement('source');koe_source.setAttribute('src','https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBcDVHUVdqS1ViZm5nLWwtTk5nMVlSVlFJRThJclE/ZT1HbFZ5VHE=.mp3');koe_source.setAttribute('type','audio/mpeg');koe_video.appendChild(koe_source);document.body.appendChild(koe_video)}else{if(koe_played){document.querySelector('#koe_video').pause()}else{document.querySelector('#koe_video').play()}}};void(0);