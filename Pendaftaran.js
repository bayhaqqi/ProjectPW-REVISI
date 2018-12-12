function terimainput(){
       var x=document.forms['biodata']['nama'].value;
       var y=document.forms['biodata']['nim'].value;
       var z=document.forms['biodata']['tgl'].value;
       var a=document.forms['biodata']['jenkel'].value;
       var b=document.forms['biodata']['prodi'].value;
       var c=document.forms['biodata']['ipk'].value;
       var d=document.forms['biodata']['alamatAsal'].value;
       var e=document.forms['biodata']['alamatKos'].value;
       var f=document.forms['biodata']['agama'].value;
       var g=document.forms['biodata']['noHp'].value;
       var h=document.forms['biodata']['email'].value;
       var i=document.forms['biodata']['hobi'].value;
       var j=document.forms['biodata']['motto'].value;
       var k=document.forms['biodata']['pendidikan'].value;
       var l=document.forms['biodata']['pengalaman'].value;
       var m=document.forms['biodata']['skill'].value;
                                            
       var tabel = document.getElementById("tabelinput");
       var row = tabel.insertRow(1);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
       var cell4 = row.insertCell(3);
       var cell5 = row.insertCell(4);
       var cell6 = row.insertCell(5);
       var cell7 = row.insertCell(6);
       var cell8 = row.insertCell(7);
       var cell9 = row.insertCell(8);
       var cell10 = row.insertCell(9);
       var cell11 = row.insertCell(10);
       var cell12 = row.insertCell(11);
       var cell13 = row.insertCell(12);
       var cell14 = row.insertCell(13);
       var cell15 = row.insertCell(14);
       var cell16 = row.insertCell(15);
            
       cell1.innerHTML = x;
       cell2.innerHTML = y;
       cell3.innerHTML = z;
       cell4.innerHTML = a;
       cell5.innerHTML = b;
       cell6.innerHTML = c;
       cell7.innerHTML = d;
       cell8.innerHTML = e;
       cell9.innerHTML = f;
       cell10.innerHTML = g;
       cell11.innerHTML = h;
       cell12.innerHTML = i;
       cell13.innerHTML = j;
       cell14.innerHTML = k;
       cell15.innerHTML = l;
       cell16.innerHTML = m;

window.alert("Data berhasil di entry");
}
function kirimPesan(){
       var tanya = confirm("Apakah Anda ingin mengirim pesan ?");

       if(tanya === true) {
              pesan = "Terkirim";
              window.alert("Pesan berhasil di Kirim");

              var x=document.forms['pesan']['nama'].value;
              var y=document.forms['pesan']['email'].value;
              var z=document.forms['pesan']['jenis'].value;
              var a=document.forms['pesan']['comment'].value;

              var tabel = document.getElementById("tabelinputPesan");
              var row = tabel.insertRow(1);
              var cell1 = row.insertCell(0);
              var cell2 = row.insertCell(1);
              var cell3 = row.insertCell(2);
              var cell4 = row.insertCell(3);

              cell1.innerHTML = x;
              cell2.innerHTML = y;
              cell3.innerHTML = z;
              cell4.innerHTML = a;

       }else{
              pesan = "Batal";
              window.alert("Pesan BATAL di kirim");
       }

       document.getElementById("pesan").innerHTML = pesan;
}
