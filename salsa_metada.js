<?

//Initialize a couple of variable's we'll need later
var title = 'Profile Manager',
    description = 'Update your pofile.',
    image,
    page_type,
    page,
    page_url,
    page_param,
    page_id;
//Get all the GET parameters from the URL
var params = Request.getParameterList();

//Our regex will look for all parameters with "_KEY" in them
var key_pattern = new RegExp( "_KEY" );

//This gets the page object and URL
function getPageBasics() {
  page_type = page_param.replace( '_KEY', '' );
  
  //Get the page data based on the page type and page ID
  page = DB.getObject( page_type, page_id );

  //Reconstruct the page URL based on the base URL and parameters
  page_url = Request.getURL()+page_param+page_id;
}

function getPageContent() {
  //See which page type it is, then grab appropriate content from the DB
  switch (page_type)
  {
    case 'signup_page':
      description = page.preFooter;
      title = page.Title;
      break;
    case 'donate_page':
      description = page.Custom_Donation_HTML;
      title = page.Reference_Name;
      break;
    case 'action':
      description = page.Footer;
      title = page.Title;
      break;
    case 'event':
      description = page.Description;
      title = page.Event_Name;
      break;
    case 'content_item':
      description = 'Custom content item';
      title = page.Title;
      break;
    case 'tell_a_friend':
      title = page.Title;
      description = 'Tell a friend!';
      break;
    case 'questionnaire':
      title = page.Title;
      description = 'Questionnaire';
      break;
    case 'supporter_my_donate_page':
      title = page.Page_Title;
      description = 'Help me reach my goal!';
      break;
    default: 
      description = 'Salsa page';
      title = 'Thank you!';
  }
}



//Cycle through all the parameters
for(var index in params) {
  //If one of them matches the regex, let's use it
  if ( key_pattern.test( params[index]['name'] ) )
   {
    //Grab the parameter name and value
    page_param = params[index]['name'];
    page_id = params[index]['value'];
    getPageBasics();
    getPageContent();
   }
}


?>