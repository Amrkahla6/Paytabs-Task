
    $( document ).ready(function() {
    $.ajax({
        type: "GET",
        url: "{{route('main-category')}}",
        data: {},
        success: function(response) {
            //Choose first Option
            $('#MainCategory').append($(
                '<option>', {
                    value: -1,
                    text: "Choose Category",
                    selected:true,
                    disabled:true
                }));
            for (var i =0; i< response.categories.length; i++){
                $('#MainCategory').append($('<option>', {
                    value: response.categories[i].id,
                    text: response.categories[i].name
                }));
            }
        }
    });

});

    function subCategory(sub_id = null){
    let cat_main_id   = $('#MainCategory option:selected').val();
    let cat_sub_id    = $(`#${sub_id} option:selected`).val();
    let category_id   = cat_sub_id ? cat_sub_id : cat_main_id;
    console.log(category_id)
    $.ajax({
    type: "GET",
    url: "{{route('sub-category')}}",
    data: {
    category_id:category_id
},
    success: function(response) {
    $('#errors').hide();
    let subCategories =
    `<div class="col-sm">
                            <select class="form-select" id="${category_id}"  onclick="subCategory(this.id)">
                                <option selected disabled >Choose Sub Category</option>`
    for (var i =0; i< response.subCategory.length; i++) {
    subCategories += `<option value="${response.subCategory[i].id}" >${response.subCategory[i].name}</option>`
}
    subCategories +=     `</select><div>`;

    var iDiv = document.getElementById('subCategories');
    let g = document.createElement('div'); g.setAttribute("id", `${category_id}-Category`);
    g.innerHTML = subCategories;
    iDiv.appendChild(g);
    document.body.appendChild(iDiv);
},error: function(error){
    $('#errors').show();
    $("#errors").text(error.responseJSON.error);
}

});
}
