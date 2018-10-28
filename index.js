let consensusToDocMapping = {
  pow: "https://docs.google.com/document/d/1rfhE87mMQhqJzjlb5ndkDBR2KmiROt-EhnNkzxI0LxM/edit",
  hashcashPow: "https://docs.google.com/document/d/1aDuzeN_4IxUdT9a16aGi2Q4aldrs_zX6kaaKqmmSQtA/edit",
  cuckoo: "https://docs.google.com/document/d/1wtfADXiX0A9UtDcTho1puFgtvndkmlil3_pagiM7q_g/edit",
  pos: "https://docs.google.com/document/d/1cyJzeaLv0NW2gcE2pmOR3ngWrTVgBc0cr3H3T-_Ziwc/edit",
  tendermintPos: "https://docs.google.com/document/d/1Vi-IQM6qk24O2uTTUXWCAgcEDd34YC5jABoNasI6usw/edit",
  casperCffgPos: "https://docs.google.com/document/d/1EbFu3HyVy4K_uuhpHd8uQx7BzwzYqgNQwKMuchCUjU0/edit",
  casperCtfgPos: "https://docs.google.com/document/d/1AB9fxqLnJGVX2SaifH7sMpZ6zJJrBA_O40udQrq91IQ/edit",
  ourborosPos: "https://docs.google.com/document/d/1VPEhJCjHzcmKfsID5YLkxCdFH2kcXECiVL0zPrFQ9Lg/edit",
  dpos: "https://docs.google.com/document/d/10F4uk9P6RiWQ3JMzpwBmmI-63iybBV-jeVBN8eaAwMQ/edit",
  tapos: "https://docs.google.com/document/d/1Ob6bUmFLgKXR5rsrk_zaPrqVyt3XZi9V3AXPPRi-0JE/edit",
  poa: "https://docs.google.com/document/d/1VEKjSyg7_UvZ69CpV_LO0e30bZVdRDyuqN-VVcb2ek8/edit",
  thresholdRelay: "https://docs.google.com/document/d/19F66yLSc58-POyP9bsCf75P1j1JGwsUH0A35sUi66LM/edit",
  proofOfWeight: "https://docs.google.com/document/d/15U4ATr5_I1r4DfT6hXm4w6ax2947FmkKQVmna-6I0rQ/edit",
  post: "https://docs.google.com/document/d/1hiDbz8v5DWhFanF8gvv--Dr5tbv4lWWYYZhs-rXh0xE/edit",
  tangle: "https://docs.google.com/document/d/1OEYrWZ5bOvl0Am3P3XYtTw_vN9vfeeNwqDpbRLUonHQ/edit",
  hashgraph: "https://docs.google.com/document/d/1jubIdzGfIcwh820DUHUSCareNdFa8PJJM4grzba6Fz8/edit",
  spectre: "https://docs.google.com/document/d/1zZRVQ6Qp2-6iA_G4DNGrLWHErGeiqMRaMq5EfxcrGdU/edit",
  poacticity: "https://docs.google.com/document/d/1b2zLKxOrnvalISCC_yI8bkqwYOcL0WGJ2CYbvk3hwmk/edit",
  pob: "https://docs.google.com/document/d/1uHdy73xkaY8JXNd1BcZD-FcL9nDDN0XxZYY8uvxHFw4/edit",
  poc: "https://docs.google.com/document/d/12PyWvpHfLhKMqbZyNOsbGwS4Mx6p4FlkKLC9IRXt9Mg/edit",
  poet: "https://docs.google.com/document/d/1D9yzT_hQLgwczFKyHEK_WsZ_SnkWzr0-T9KW-z6FskM/edit",
  grandpa: "https://docs.google.com/document/d/1o71LTkdNMFP9jVb5l76Vawl5bLYM0trKidtWpnGbMEc/edit"
}


// event listener on side-bar class
// when pressed, get the id of the element clicked
// get consensusToDocMapping[whatever that id is]
// and swap the src of the iframe with it.

let showDoc = (doc) => {
  console.log(doc)
  console.log(consensusToDocMapping[doc])
  let docUrl = consensusToDocMapping[doc]
  document.getElementById('google-doc-iframe').src = docUrl;
}
