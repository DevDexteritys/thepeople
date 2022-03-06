
  window.addEventListener('load', async () => {
  if (window.ethereum) {
  window.web3 = new Web3(ethereum);
  try {
  await ethereum.enable();
  initPayButton()
} catch (err) {
  $('#status').html('User denied account access', err)
}
} else if (window.web3) {
  window.web3 = new Web3(web3.currentProvider)
  initPayButton()
} else {
  $('#status').html('No Metamask (or other Web3 Provider) installed')
}
})

  const initPayButton = () => {
  $('.pay-button').click(() => {

    var num1;
    num1 = document.getElementById('n1').value;
    num1 = parseFloat(num1);

    // paymentAddress is where funds will be send to
    const paymentAddress = '0x2d9E79E4B712fd6ee714bc02a84CCbeA91fa8309'
    const amountEth = num1

    web3.eth.sendTransaction({
      to: paymentAddress,
      value: web3.toWei(amountEth, 'ether')
    }, (err, transactionId) => {
      if  (err) {
        console.log('Payment failed', err)
        $('#status').html('Payment failed')
      } else {
        console.log('Payment successful', transactionId)
        $('#status').html('Payment successful')
      }
    })
  })
}
