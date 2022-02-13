function swipe(action) {
    let bnts = document.querySelectorAll('button.button');
    if (bnts.length !== 5) {
        // Not found buttons.
        return;
    }
    if (action === 'super-like') {
        console.log('⭐ Send Super Like!');
        let noSuperLike = bnts[2].parentNode.parentNode.querySelectorAll("span[aria-label=\"0 remaining\"]");
        if (noSuperLike.length === 1) {
            // No super like, send like
            bnts[3].click();
        } else {
            // Send super like
            bnts[2].click();
        }
    } else if (action === 'like') {
        console.log('💗 Send Like!');
        bnts[3].click();
    } else { // pass
        console.log('❌ Send Pass');
        bnts[1].click();
    }

    // If popup
    setTimeout(function () {
        let bntsPopup = document.querySelectorAll('button.button');
        if (bntsPopup.length > 5) {
            // Close Popup -- No, Thanks
            bntsPopup[bntsPopup.length - 1].click();
        }
    }, 1500);
}

function swipeLoop() {
    setTimeout(function () {
        if (Math.random() >= 0.99) {
            // reload
            location.reload();
        } else {
            swipe('like');
        }
        swipeLoop();
    }, 500 + (2000 * Math.random()))
}

swipeLoop();