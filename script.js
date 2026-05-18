// Lead Data

const leads = [

    {
        name:"Aman",
        email:"aman@gmail.com",
        status:"New"
    },

    {
        name:"Karan",
        email:"karan@gmail.com",
        status:"Contacted"
    },

    {
        name:"Neha",
        email:"neha@gmail.com",
        status:"Converted"
    }

];

const tableBody = document.getElementById("table-body");


// Show Leads

function showLeads(){

    tableBody.innerHTML = "";

    let total = leads.length;

    let contacted = 0;

    let converted = 0;

    leads.forEach((lead,index)=>{

        if(lead.status === "Contacted"){
            contacted++;
        }

        if(lead.status === "Converted"){
            converted++;
        }

        tableBody.innerHTML += `

        <tr>

            <td>${lead.name}</td>

            <td>${lead.email}</td>

            <td>${lead.status}</td>

            <td>

                <button class="delete-btn"
                onclick="deleteLead(${index})">

                Delete

                </button>

            </td>

        </tr>

        `;
    });

    // Update Cards

    document.getElementById("total-leads").innerText = total;

    document.getElementById("contacted-leads").innerText = contacted;

    document.getElementById("converted-leads").innerText = converted;
}


// Add Lead

function addLead(){

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const status = document.getElementById("status").value;

    if(name === "" || email === ""){

        alert("Please fill all fields");

        return;
    }

    leads.push({

        name:name,
        email:email,
        status:status

    });

    showLeads();

    // Clear Inputs

    document.getElementById("name").value = "";

    document.getElementById("email").value = "";
}


// Delete Lead

function deleteLead(index){

    leads.splice(index,1);

    showLeads();
}


// Run

showLeads();