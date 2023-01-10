module.exports.dashData = {
    data : {
        name : 'Chinonso-Chibuike',
        nVisitor : 100,
        onlineVisitor : 7,
        rmTemp : 20,
        extTemp : -5,
        totalStaff : 10,
        cultivatePercent : 40,
        cultivateDay : 4,
        cultivateTime : [4,5],
        staffDetails : [
            {
               name : 'Luiz Diaz',
               status : 'Signed out',
               time : '4:24pm',
               src :'https://images.unsplash.com/photo-1629467057571-42d22d8f0cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
            },
            {
                name : 'Luix Diaz',
                status : 'logged in',
                time : '1:24pm',
                src : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
             },
             {
                name : 'Luiz Diaz',
                status : 'logged in',
                time : '1:24pm',
                src : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
             },
             {
                name : 'Hanley nees',
                status : 'logged in',
                time : '1:24pm',
                src : 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
             }
        ],

        toDo : [
            {
              task : 'water the plants',
              month : 'Mar 4',
              time : '4pm',
              src : ''
            },
            {
                task : 'water the plant',
                month : 'Mar 4',
                time : '4pm',
                src : ''
              },
              {
                task : 'water the plant',
                month : 'Mar 4',
                time : '4pm',
                src : ''
              },
              {
                task : 'water the plant',
                month : 'Mar 4',
                time : '4pm',
                src : ''
              },
        ],
        visitData : {
          labels :[2020,2021,2022,2023,2024]

          ,datasets : [{
            label:'Web Traffic ',
            data : [2000,3000,5000,5800,1000],
            backgroundColor : ['#7E7BEA','#F9DBE0'],
            borderRadius : 10
            }]
        },
        metric : [
            {label1:'10,000',label2:'Daily visitors'},
            {label1:'9 \u00B0C',label2:'Room  temperature'},
            {label1:'-20 \u00B0C',label2:'External temperature'},
            {label1:'10',label2:'Present Staffs'},
          ],
          task :{
            data: 'Water the Plant',

          }
    }
}