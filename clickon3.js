// Function to click on the specified element for step 3
function clickStep3Element() {
    const element = document.querySelector('#mount_0_0_2n > div > div:nth-child(1) > div > div:nth-child(5) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div:nth-child(3) > div > div > div.x6s0dn4.x78zum5.x13a6bvl > div.x1i64zmx > div > div > div.x6s0dn4.x78zum5.xl56j7k.x1608yet.xljgi0e.x1e0frkt > div > span > span');

    if (element) {
        element.click();
        console.log("Step 3: Element clicked.");
    } else {
        console.log("Step 3: Element not found.");
    }
}

// Execute the function for step 3
clickStep3Element();

