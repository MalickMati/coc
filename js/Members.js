let membersArray = [
    ['14','Villain', 'Leader (Zombie!Squad)', 'NA', 'NA', 'NA', 'NA', 'Selected', 17, '../Images/town hall/th4.png'],
    ['19','Ice Golem', 'Member', '16', '15', 'NA', 'NA', 'Selected', 61, '../Images/town hall/th9.webp'],
    ['20','Raja Misbakh', 'Member', '34', '28', 'NA', 'NA', 'Selected', 86, '../Images/town hall/th10.png'],
    ['20','Haseeb', 'Member', '16', '16', 'NA', 'NA', 'Selected', 81, '../Images/town hall/th10.png'],
    ['20','Zombie Zia', 'Elder', '31', '32', 'NA', 'NA', 'Selected', 93, '../Images/town hall/th10.png'],
    ['21','Pusher', 'Member', '39', '50', '18', 'NA', 'Selected', 115, '../Images/town hall/th11.png'],
    ['21','John Sena', 'Member', '41', '42', '17', 'NA', 'Selected', 116, '../Images/town hall/th11.png'],
    ['21','Abd ur Rehman', 'Member', '43', '47', '20', 'NA', 'Selected', 122, '../Images/town hall/th11.png'],
    ['21','Ladla', 'Member', '35', '36', '7', 'NA', 'Selected', 91, '../Images/town hall/th11.png'],
    ['21','War Supperessor', 'Member', '32', '37', '5', 'NA', 'Not-Selected', 91, '../Images/town hall/th11.png'],
    ['21','PAK clashers', 'Member', '40', '47', '16', 'NA', 'Selected', 114, '../Images/town hall/th11.png'],
    ['21','Raja G', 'Co-Leader', '37', '38', '6', 'NA', 'Selected', 107, '../Images/town hall/th11.png'],
    ['21','Raja', 'Co-Leader', '41', '43', '8', 'NA', 'Selected', 119, '../Images/town hall/th11.png'],
    ['25','Muneeb Hassan', 'Member', '45', '52', '25', '7', 'Selected', 175, '../Images/town hall/th15.png'],
    ['23','Mati ur Rehman', 'Leader', '53', '68', '40', '7', 'Selected', 214, '../Images/town hall/th13.webp'],
    ['23','Hero', 'Co-Leader', '60', '65', '35', '6', 'Selected', 163, '../Images/town hall/th13.webp'],
    ['22','Sufyan', 'Co-Leader', '46', '53', '30', 'NA', 'Selected', 176, '../Images/town hall/th12.webp'],
    ['22','Mati ur Rehman', 'Member', '51', '53', '21', 'NA', 'Selected', 135, '../Images/town hall/th12.webp'],
    ['22','Zombie Mati', 'Member', '51', '56', '23', 'NA', 'Selected', 133, '../Images/town hall/th12.webp']
    ['22','Ali', 'Member', '42', '56', '23', 'NA', 'Selected', 145, '../Images/town hall/th12.webp'],
    ['22','Legend Op', 'Member', '50', '51', '20', 'NA', 'Selected', 127, '../Images/town hall/th12.webp']
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
      xplvl.innerHTML = '<div><span class="bold">XP: </span><span>'+ membersArray[i][8] +'</span></div>';

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