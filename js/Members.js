let membersArray = [
    ['14','Villain', 'Leader (Zombie!Squad)', 'NA', 'NA', 'NA', 'NA', 'Selected', 'QUUPVCY22', '../Images/town hall/th4.png'],
    ['19','Ice Golem', 'Member', '16', '15', 'NA', 'NA', 'Selected', 'QPQYLVPG2', '../Images/town hall/th9.webp'],
    ['20','Raja Misbakh', 'Member', '34', '28', 'NA', 'NA', 'Selected', 'LCVP2C9JP', '../Images/town hall/th10.png'],
    ['20','Haseeb', 'Member', '16', '16', 'NA', 'NA', 'Selected', 'G8Y88PJG9', '../Images/town hall/th10.png'],
    ['20','Zombie Zia', 'Elder', '31', '32', 'NA', 'NA', 'Selected', 'Q2PJR8QUP', '../Images/town hall/th10.png'],
    ['21','Pusher', 'Member', '39', '50', '18', 'NA', 'Selected', 'LPJQR8VRU', '../Images/town hall/th11.png'],
    ['21','John Sena', 'Member', '41', '42', '17', 'NA', 'Selected', 'YGC89J92G', '../Images/town hall/th11.png'],
    ['21','Abd ur Rehman', 'Member', '43', '47', '20', 'NA', 'Selected', 'YG9G28QJR', '../Images/town hall/th11.png'],
    ['21','Ladla', 'Member', '35', '36', '7', 'NA', 'Selected', 'Q9V0J90RL', '../Images/town hall/th11.png'],
    ['21','War Supperessor', 'Member', '32', '37', '5', 'NA', 'Not-Selected', 'LV0LVQL28', '../Images/town hall/th11.png'],
    ['21','PAK clashers', 'Member', '40', '47', '16', 'NA', 'Selected', 'LLVCYLUJO', '../Images/town hall/th11.png'],
    ['21','Raja G', 'Co-Leader', '37', '38', '6', 'NA', 'Selected', 'LJC8RG8VG', '../Images/town hall/th11.png'],
    ['21','Raja', 'Co-Leader', '41', '43', '8', 'NA', 'Selected', 'LQQC9JGV2', '../Images/town hall/th11.png'],
    ['25','Muneeb Hassan', 'Member', '45', '52', '25', '7', 'Selected', 'Y9V9P0J0V', '../Images/town hall/th15.png'],
    ['23','Mati ur Rehman', 'Leader', '53', '68', '40', '7', 'Selected', 'Y0JCUYGGR', '../Images/town hall/th13.webp'],
    ['23','Hero', 'Co-Leader', '60', '65', '35', '6', 'Selected', 'YU0020LQC', '../Images/town hall/th13.webp'],
    ['22','Sufyan', 'Co-Leader', '46', '53', '30', 'NA', 'Selected', 'L22V2P8JO', '../Images/town hall/th12.webp'],
    ['22','Mati ur Rehman', 'Member', '51', '53', '21', 'NA', 'Selected', 'Y0JGRUL0J', '../Images/town hall/th12.webp'],
    ['22','Zombie Mati', 'Member', '51', '56', '23', 'NA', 'Selected', 'Y80GJ20U8', '../Images/town hall/th12.webp'],
    ['22','Ali', 'Member', '42', '56', '23', 'NA', 'Selected', 'PRQCUV8RU', '../Images/town hall/th12.webp'],
    ['22','Legend Op', 'Member', '50', '51', '20', 'NA', 'Selected', 'QU9UUJR2V', '../Images/town hall/th12.webp']
  ];
  membersArray.sort(function (a, b) {
    return b[0].localeCompare(a[0]);
  });

  function shwomembers(){
    var container = document.getElementById('container');
    container.innerHTML = '';
    for(var i = 0; i < membersArray.length; i++ ) {
      var sel = 'NA';
      if(i<15){
        sel = 'Selected';
      }
      else{
        sel = 'Not- Selected';
      }


      var card = document.createElement('article');
      card.className = 'member';

      var image = document.createElement('img');
      image.src = membersArray[i][9];
      image.alt = 'fullArray[i][0]';

      var name = document.createElement('div');
      name.innerHTML = '<div><span class="bold">Name: </span><span>'+ membersArray[i][1] +'</span></div>';
      
      var role = document.createElement('div');
      role.innerHTML = '<div><span class="bold">Role: </span><span>'+ membersArray[i][2] +'</span></div>';

      var heroes = document.createElement('div');
      heroes.innerHTML = '<div><span class="bold"> K: </span><span>'+ membersArray[i][3] +'</span><span class="bold">  Q: </span><span>'+ membersArray[i][4] +'</span><span class="bold">  W: </span><span>'+ membersArray[i][5] +'</span><span class="bold">  R: </span><span>'+ membersArray[i][6] +'</span></div>';

      var cwlstatus = document.createElement('div');
      cwlstatus.innerHTML = '<div><span class="bold">CWL: </span><span>'+ sel +'</span></div>';

      var xplvl = document.createElement('div');
      xplvl.innerHTML = '<div><span class="bold">TAG: </span><a href = "https://link.clashofclans.com/en?action=OpenPlayerProfile&tag='+ membersArray[i][8] +'">#'+ membersArray[i][8] +'</a></div>';

      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(role);
      card.appendChild(heroes);
      card.appendChild(cwlstatus);
      card.appendChild(xplvl);
      container.appendChild(card);
    }
    document.getElementById('select').innerHTML = '';
  }