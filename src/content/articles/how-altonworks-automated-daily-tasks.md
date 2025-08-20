---
title: "Automating Daily Tasks | Altonworks"
description: "We all have repetitive computing tasks that we dread. Maybe it is invoicing, patient intake forms, copy/pasting excel rows from one sheet to another, or updating inventory. It’s not a perplexing task, it’s just tiresome. You can’t help but wonder, “isn’t there a way to make this go faster?”"
author: "Niko Permilovsky"
publishDate: "2025-04-15"
updatedDate: "2025-04-15"
---

# How Alton Computer Solutions Automated Daily, Tedious Tasks
*By Niko Permilovsky*

We all have repetitive computing tasks that we dread. Maybe it is invoicing, patient intake forms, copy/pasting excel rows from one sheet to another, or updating inventory. It’s not a perplexing task, it’s just tiresome. You can’t help but wonder, “isn’t there a way to make this go faster?”

Well, there is!

Here is how we reduced a daily backup check-and-verify task from 30 minutes to instantaneous using Power Automate and a custom website we created.

As part of the [Backup and Disaster Recovery Plan](/solutions/backup) we monitor our customer’s backups to check if successful; and if something went wrong, such as a network error, we investigate and fix it.

The process of checking all the reports from the backup devices sent to our Outlook email is time consuming. The reports come in detailing workstation, server, and cloud backups. There isn’t a nice, clean, and centralized dashboard where all the reports go to.

## Part 1: Power Automate
We automated the manual email backup checking process to save time and eliminate human error. There are three constants: The “deadline” all the reports came in by, a clear distinction between success and failure, and the general format that the message has. All the reports come in by 8:30, which is when our process starts.

Using Power Automate through Microsoft 365 we integrated all the backup emails very neatly. We created a daily task that gathers the emails into one bucket. It then loops through them one by one and sorts them into smaller buckets, depending on the backup type – whether workstation, server, or cloud. From there we save it all to the server and delete the email from the mailbox to save space.

## Part 2: Parsing
Next, we need to parse the emails so we can display them in a clean, human-readable report. Parsing emails is straightforward: take the title, the device name, the date, and the description, and convert it into a row. We gather all the rows into one table and send it to the webserver.

## Part 3: Displaying The Report – the user-friendly results
The last part is displaying the results back so they can be accessible to all of Altonworks’ employees. We can do this by running a webserver on a Virtual Machine. Every morning, the report is ready first thing by clicking on a bookmarked link in a web browser. It contains all the backup reports for each of our customers in a simple, easy to read format. We can even set it to print every morning!

## If you are interested in finding a solution that streamlines tasks and frees up time, [contact us now to schedule a meeting.](https://outlook.office365.com/book/AltonworksConsultation@altonworks.com/)
