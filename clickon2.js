// Function to click on the specified element for step 2
function clickLeaveGroupStep2() {
    const element = document.querySelector('#mount_0_0_2n > div > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div:nth-child(2) > div > div > div.xu96u03.xm80bdy.x10l6tqk.x13vifvy > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div > div.x9f619.x1ja2u2z.x1k90msu.x6o7n8i.x1qfuztq.x10l6tqk.x17qophe.x13vifvy.x1hc1fzr.x71s49j.xh8yej3 > div > div.x78zum5.xdt5ytf.x1iyjqo2.x1n2onr6 > div > div:nth-child(7) > div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x6s0dn4.x78zum5.x1q0g3np.x1iyjqo2.x1qughib.xeuugli > div > div > span');

    if (element) {
        element.click();
        console.log("Step 2: Element clicked.");
       // setTimeout(clickOKButton, 2000); // 2-second delay after clicking the element
    } else {
        console.log("Step 2: Element not found.");
    }
}



// Execute the function for step 2
clickLeaveGroupStep2();
