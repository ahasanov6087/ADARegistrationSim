        const buttonn = document.getElementById('summary');
        const table = document.getElementById('esascedvel');
        const textarea1 = document.getElementById("SALAM1");
        const textarea2 = document.getElementById("SALAM2");
        const textarea3 = document.getElementById("SALAM3");
        const textarea4 = document.getElementById("SALAM4");
        const textarea5 = document.getElementById("SALAM5");
        let say = 8;
        let h = 0;
        let statuss = ['Registering', 'Registering', 'Registering', 'Registering', 'Registering', 'Registering', 'Registering', 'Registering', 'Registering'];
        let type = ['Lecture', 'Lecture', 'Lecture', 'Lecture', 'Lecture', 'Lecture', 'Lecture', 'Lecture', 'Lecture'];
        let hours = ['6', '6', '6', '6', '6', '6', '6', '6', '6']
        let details = ['MATH 1111, 0', 'PDEV 2302, 0', 'SOCS 1102, 0', 'CSCI 3600, 0', 'SITE 1101, 0', 'LITR 2302, 0', 'HUMA 1101, 0', 'COMM 1200, 0', 'WRIT 1101, 0'];
        let title = ['Calculus I', 'Data & Computing Skills', 'Global Perspectives', 'Intro to Python Programming', 'Principles of Info. Systems', 'Literature of Azerbaijan', 'Music. Heritage of Azerbaijan', 'Public Speaking & Persuasion', 'Writing & Info Literacy I'];
        buttonn.addEventListener('click', () => {
        if(textarea1.value.length == 5)
        {
            console.log(textarea2.value.length);
            h=h+1;
            if(h<7)
        {
            document.getElementById("olmaz").innerHTML = "";
            const newcolumn = document.createElement('tr');
            table.appendChild(newcolumn);
            let s = Math.floor(Math.random()*say);
            for(let i=0; i<7; i++)
        {
            const newelement = document.createElement('td');
            if(i==0)
            {
                newelement.textContent = title[s];
                title.splice(s, 1);
                table.appendChild(newelement);
                say--;
            }
            if(i==1)
            {
                newelement.textContent = details[s];
                details.splice(s, 1);
                table.appendChild(newelement);
            }
            if(i==2)
            {
                newelement.textContent = hours[s];
                hours.splice(s, 1);
                table.appendChild(newelement);
            }
            if(i==3)
            {
                newelement.textContent = textarea1.value;
                table.appendChild(newelement);
            }
            if(i==4)
            {
                newelement.textContent = type[s];
                type.splice(s, 1);
                table.appendChild(newelement);
            }
            if(i==5)
            {
                newelement.textContent = statuss[s];
                statuss.splice(s, 1);
                table.appendChild(newelement);
            }
            if(i==6)
            {
                table.append(newelement);
                const select = document.createElement('select');
                select.id = "mySelect";
                const webregister = document.createElement('option');
                webregister.value = 'webregister';
                webregister.text = '**Web Register**';
                select.appendChild(webregister);
                const none = document.createElement('option');
                none.value = 'none';
                none.text = 'None';
                select.appendChild(none);
                newelement.appendChild(select);
                createDropdown();
            }
        }
        }
        }
        else{
            document.getElementById("olmaz").innerHTML = "CRN 5 rəqəmli olur!";
        }
        if(textarea2.value.length == 5)
        {
            h=h+1;
            if(h<7)
        {
            document.getElementById("olmaz").innerHTML = "";
            const newcolumn = document.createElement('tr');
            table.appendChild(newcolumn);
            let s = Math.floor(Math.random()*say);
            for(let i=0; i<7; i++)
        {
            const newelement = document.createElement('td');
            if(i==0)
            {
                newelement.textContent = title[s];
                title.splice(s, 1);
                table.appendChild(newelement);
                say--;
            }
            if(i==1)
            {
                newelement.textContent = details[s];
                details.splice(s, 1);
                table.appendChild(newelement);
            }
            if(i==2)
            {
                newelement.textContent = hours[s];
                hours.splice(s, 1);
                table.appendChild(newelement);
            }
            if(i==3)
            {
                newelement.textContent = textarea2.value;
                table.appendChild(newelement);
            }
            if(i==4)
            {
                newelement.textContent = type[s];
                type.splice(s, 1);
                table.appendChild(newelement);
            }
            if(i==5)
            {
                newelement.textContent = statuss[s];
                statuss.splice(s, 1);
                table.appendChild(newelement);
            }
            if(i==6)
            {
                table.append(newelement);
                const select = document.createElement('select');
                select.id = "mySelect";
                const webregister = document.createElement('option');
                webregister.value = 'webregister';
                webregister.text = '**Web Register**';
                select.appendChild(webregister);
                const none = document.createElement('option');
                none.value = 'none';
                none.text = 'None';
                select.appendChild(none);
                newelement.appendChild(select);
                createDropdown();
            }
        }
        }
        }
        else{
            document.getElementById("olmaz").innerHTML = "CRN 5 rəqəmli olur!";
        }
        if(textarea3.value.length == 5)
        {
            h=h+1;
            if(h<7)
        {
            document.getElementById("olmaz").innerHTML = "";
            const newcolumn = document.createElement('tr');
            table.appendChild(newcolumn);
            let s = Math.floor(Math.random()*say);
            for(let i=0; i<7; i++)
        {
            const newelement = document.createElement('td');
            if(i==0)
            {
                newelement.textContent = title[s];
                title.splice(s, 1);
                table.appendChild(newelement);
                say--;
            }
            if(i==1)
            {
                newelement.textContent = details[s];
                details.splice(s, 1);
                table.appendChild(newelement);
            }
            if(i==2)
            {
                newelement.textContent = hours[s];
                hours.splice(s, 1);
                table.appendChild(newelement);
            }
            if(i==3)
            {
                newelement.textContent = textarea3.value;
                table.appendChild(newelement);
            }
            if(i==4)
            {
                newelement.textContent = type[s];
                type.splice(s, 1);
                table.appendChild(newelement);
            }
            if(i==5)
            {
                newelement.textContent = statuss[s];
                statuss.splice(s, 1);
                table.appendChild(newelement);
            }
            if(i==6)
            {
                table.append(newelement);
                const select = document.createElement('select');
                select.id = "mySelect";
                const webregister = document.createElement('option');
                webregister.value = 'webregister';
                webregister.text = '**Web Register**';
                select.appendChild(webregister);
                const none = document.createElement('option');
                none.value = 'none';
                none.text = 'None';
                select.appendChild(none);
                newelement.appendChild(select);
                createDropdown();
            }
        }
        }
        }
        else{
            document.getElementById("olmaz").innerHTML = "CRN 5 rəqəmli olur!";
        }
        if(textarea4.value.length == 5)
        {
            h=h+1;
            if(h<7)
        {
            document.getElementById("olmaz").innerHTML = "";
            const newcolumn = document.createElement('tr');
            table.appendChild(newcolumn);
            let s = Math.floor(Math.random()*say);
            for(let i=0; i<7; i++)
        {
            const newelement = document.createElement('td');
            if(i==0)
            {
                newelement.textContent = title[s];
                title.splice(s, 1);
                table.appendChild(newelement);
                say--;
            }
            if(i==1)
            {
                newelement.textContent = details[s];
                details.splice(s, 1);
                table.appendChild(newelement);
            }
            if(i==2)
            {
                newelement.textContent = hours[s];
                hours.splice(s, 1);
                table.appendChild(newelement);
            }
            if(i==3)
            {
                newelement.textContent = textarea4.value;
                table.appendChild(newelement);
            }
            if(i==4)
            {
                newelement.textContent = type[s];
                type.splice(s, 1);
                table.appendChild(newelement);
            }
            if(i==5)
            {
                newelement.textContent = statuss[s];
                statuss.splice(s, 1);
                table.appendChild(newelement);
            }
            if(i==6)
            {
                table.append(newelement);
                const select = document.createElement('select');
                select.id = "mySelect";
                const webregister = document.createElement('option');
                webregister.value = 'webregister';
                webregister.text = '**Web Register**';
                select.appendChild(webregister);
                const none = document.createElement('option');
                none.value = 'none';
                none.text = 'None';
                select.appendChild(none);
                newelement.appendChild(select);
                createDropdown();
            }
        }
        }
        }
        else{
            document.getElementById("olmaz").innerHTML = "CRN 5 rəqəmli olur!";
        }
        if(textarea15.value.length == 5)
        {
            h=h+1;
            if(h<7)
        {
            document.getElementById("olmaz").innerHTML = "";
            const newcolumn = document.createElement('tr');
            table.appendChild(newcolumn);
            let s = Math.floor(Math.random()*say);
            for(let i=0; i<7; i++)
        {
            const newelement = document.createElement('td');
            if(i==0)
            {
                newelement.textContent = title[s];
                title.splice(s, 1);
                table.appendChild(newelement);
                say--;
            }
            if(i==1)
            {
                newelement.textContent = details[s];
                details.splice(s, 1);
                table.appendChild(newelement);
            }
            if(i==2)
            {
                newelement.textContent = hours[s];
                hours.splice(s, 1);
                table.appendChild(newelement);
            }
            if(i==3)
            {
                newelement.textContent = textarea5.value;
                table.appendChild(newelement);
            }
            if(i==4)
            {
                newelement.textContent = type[s];
                type.splice(s, 1);
                table.appendChild(newelement);
            }
            if(i==5)
            {
                newelement.textContent = statuss[s];
                statuss.splice(s, 1);
                table.appendChild(newelement);
            }
            if(i==6)
            {
                table.append(newelement);
                const select = document.createElement('select');
                select.id = "mySelect";
                const webregister = document.createElement('option');
                webregister.value = 'webregister';
                webregister.text = '**Web Register**';
                select.appendChild(webregister);
                const none = document.createElement('option');
                none.value = 'none';
                none.text = 'None';
                select.appendChild(none);
                newelement.appendChild(select);
                createDropdown();
            }
        }
        }
        }
        else{
            document.getElementById("olmaz").innerHTML = "CRN 5 rəqəmli olur!";
        }
        });