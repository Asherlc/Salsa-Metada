Salsa-Metada
============

Script to make give Salsa ( http://www.salsalabs.com/ ) pages dynamic metadata.

Since Salsa doesn't natively populate metadata (title, OG tags, etc), one must manually edit your template to include such things using Salsascript. Drop the code into the very top of your template.

Insert the following code in your various metadata or wherever you like:

Page Title

<?=title ?>


Page Description

<?=description ?>


Page URL

<?=page_url ?>


Note: Since Salsa doesn't provide any default fields for page descriptions (other than those likely to have HTML content in them), these are set to (hopefully) rarely used fields:
Donate: Custom HTML
Action: Footer
Signup: Text above submit button

Here's how you can set up meta tags using the code above. Note that in this example, it will look for a share image with the same name as the page key. So if you create a page with a key of 8812, name your share image 8812.jpg and then upload it to the site's back end.

<meta property="og:title" content="<?= title ?> «  [REPLACE WITH SITE NAME]" />
<meta property="og:type" content="[REPLACE WITH TYPE]" />
<meta property="og:site_name" content="[REPLACE WITH SITE NAME]" />
<meta property="og:url" content="<?= page_url ?>&tag=fbs_meta&track=fbs_meta" />
<meta property="og:image" content="https://salsa3.salsalabs.com/o/50388/images/<?=page_id ?>.jpg" /> [UPDATE THE BASE URL TO MATCH YOUR CLIENT'S PATH]
<meta property="og:description" content="<?= description ?>" />
<meta property="fb:admins" content="[REPLACE WITH ADMIN ID(S)" />
