new WOW().init();

function header() {
  var yourNavigation = $(".bs-header");
  stickyDiv = "sticky";
  height = 0;
  $(window).scroll(function() {
      if ($(this).scrollTop() > height) {
          yourNavigation.addClass(stickyDiv)
      } else {
          yourNavigation.removeClass(stickyDiv)
      }
  })
}

function set_background() {
    $('.set-bg').each(function () {
        if (typeof $(this).attr('data-mob-img') === 'undefined') {
            $(this).css({
                'background-image': 'url(' + $(this).attr('data-img') + ')',
                'background-size': 'cover',
                // 'background-position': 'center'
            });
        } else {
            if ($(this).width() > 767.98) {
                if (typeof $(this).attr('data-img') != 'undefined') {
                    $(this).css({
                        'background-image': 'url(' + $(this).attr('data-img') + ')',
                        'background-size': 'cover',
                        // 'background-position': 'center'
                    });
                }
            } else {
                $(this).css({
                    'background': 'url(' + $(this).attr('data-mob-img') + ')',
                    'background-size': 'cover',
                    // 'background-position': 'center'
                });
            }
        }
    });
  }

// function maginfic_popup() {
//   $(".popup-youtube").magnificPopup({
//       type: "iframe"
//   })
// }

function customer_say() {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
          autoplay: false,
          pagination: false,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
          autoplay: false,
          pagination: false,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next.customer-next",
        prevEl: ".swiper-button-prev.customer-prev",
      },
    });
  }

  function customer_say2() {
    var swiper = new Swiper(".customer2", {
      slidesPerView: 1,
      spaceBetween: 10,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,

        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
          autoplay: false,
          pagination: false,
          navigation:false,
          
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
          autoplay: false,
          pagination: false,
          navigation:false,
        },
      },
      // navigation: {
      //   nextEl: ".swiper-button-next.customer-next",
      //   prevEl: ".swiper-button-prev.customer-prev",
      // },
      
    });
  }

function media_slider() {
  var swiper = new Swiper(".media", {
    slidesPerView: 1,
    spaceBetween: 10,
    // loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
      breakpoints: {
          640: {
              slidesPerView: 1,
              spaceBetween: 20,
              autoplay: true
          },
          768: {
              slidesPerView: 2,
              spaceBetween: 40,
              autoplay: false,
              pagination: false
          },
          1024: {
              slidesPerView: 2.7,
              spaceBetween: 50,
              autoplay: false,
              pagination: false
          }
      },
      navigation: {
          nextEl: ".swiper-button-next.typ-our-media",
          prevEl: ".swiper-button-prev.typ-our-media"
      }
  })
}

function newSwipe(){
    var swiper = new Swiper(".basic-technology", {
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

function client_slider() {
  var swiper = new Swiper(".client", {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
          nextEl: ".swiper-button-next.typ-client",
          prevEl: ".swiper-button-prev.typ-client"
      },
      autoplay: {
          delay: 5000,
      }
  })
}

function client_invester(){
    var swiper = new Swiper(".invester", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      speed: 2500,
      disableOnInteraction: false,
      freeMode: true,
      autoHeight: true,
      autoplay: {
        delay: 1,
        // disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 50,
          autoplay: {
            delay: 1500,
            // disableOnInteraction: false,
          },
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });
  }

function family_invester(){
  var swiper = new Swiper(".family-invester", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    speed: 2500,
    disableOnInteraction: false,
    freeMode: true,
    autoHeight: true,
    autoplay: {
      delay: 1,
      // disableOnInteraction: false,
        reverseDirection: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 50,
        autoplay: {
          delay: 1500,
          reverseDirection: true,
          // disableOnInteraction: false,
        },
      },
      768: {
        slidesPerView: 2,
        autoplay: {
          delay: 1500,
          reverseDirection: true,
          // disableOnInteraction: false,
        },
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
}

  function bank_partner(){
    var swiper = new Swiper(".bank-partner", {
      slidesPerView: 4,
      spaceBetween:30,
      loop: true,
      speed: 1000,
      disableOnInteraction: false,
      freeMode: true,
      autoHeight: true,
      autoplay: {
        delay: 1500,
        // disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next.next-arrow-logo",
        prevEl: ".swiper-button-prev.prev-arrow-logo",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          // spaceBetween: 50,
          autoplay: true,
        },
        768: {
          slidesPerView: 2,
          autoplay: true,
        },
        1024: {
          slidesPerView: 4,
          autoplay: true,
        },
        1200: {
          slidesPerView: 5,
          autoplay: false,
        },
        1400:{
          slidesPerView: 7,
          autoplay: false,
        }
      },
    });
  }

  function mobile_slider(){
    var swiper = new Swiper(".mobile-img-slider", {
      slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next.technology-arrow-next",
        prevEl: ".swiper-button-prev.technology-arrow-prev",
      },
      speed: 1000,
      autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },      
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
    }
    
function counter() {
  var counted = 0;
  // $(window).scroll(function() {
     $(window).on('load',function () {
      if ($("#counter").length == 1) {
          var oTop = $("#counter").offset().top - window.innerHeight;
          if (counted == 0 && $(window).scrollTop() > oTop) {
              $(".count").each(function() {
                  var $this = $(this),
                      countTo = $this.attr("data-count");
                  $({
                      countNum: $this.text()
                  }).animate({
                      countNum: countTo
                  }, {
                      duration: 2e3,
                      easing: "swing",
                      step: function() {
                          $this.text(Math.ceil(this.countNum).toLocaleString("en-IN"))
                      },
                      complete: function() {
                          $this.text(Math.ceil(this.countNum).toLocaleString("en-IN"))
                      }
                  })
              });
              counted = 1
          }
      }
  })
}

function counter_scroll() {
  var counted = 0;
  $(window).scroll(function () {
    // $(window).on('load',function () {
    if ($('.counter-scroll').length == 1) {
      var oTop = $('.counter-scroll').offset().top - window.innerHeight;
      if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
            countNum: countTo
          },

            {

              duration: 100000,
              easing: 'swing',
              step: function () {
                //$this.text(Math.ceil(this.countNum));
                $this.text(
                  Math.ceil(this.countNum).toLocaleString("en-IN")
                );
              },
              complete: function () {
                $this.text(
                  Math.ceil(this.countNum).toLocaleString("en-IN")
                );
                //alert('finished');
              }

            });
        });
        counted = 1;
      }
    }

  });
}


// function updateValue(newValue) { document.getElementById("rangeValue").innerHTML = newValue + ""; }

function select2() {
  $(".js-select2").select2({
      // placeholder: "Select a state",
  placeholder: "Select Profile",
  
  });

  $(".property-select-type").select2({
    placeholder: "Property Type",
  });

  $(".usage-select-type").select2({
    placeholder: "Usage Type",
  });

  $(".agreement-select-type").select2({
    placeholder: "Agreement Type",
  });
 
  $(".companys").select2({
    placeholder: "Company Type",
  });

  $(".large").select2({
      dropdownCssClass: "big-drop"
  })
}

// function propertytype(){
//   $(".property-select-type").select2({
//     placeholder: "Property Type",
//   });
// }

function tab_section() {
  $(".tab-sec .tablinks").click(function() {
      var ind = $(this).index();
      console.log(ind);
      switch (ind) {
          case 0:
              console.log("slide-1");
              $(".bg-man .tabcontent").removeClass("active-first active-second active-third");
              $("#case-1").addClass("active-first");
              $("#case-2").addClass("active-second");
              $("#case-3").addClass("active-third");
              $("#tab-1").addClass("active");
              $("#tab-2").removeClass("active");
              $("#tab-3").removeClass("active");
              break;
          case 1:
              console.log("slide-2");
              $(".bg-man .tabcontent").removeClass("active-first active-second active-third");
              $("#case-1").addClass("active-third");
              $("#case-2").addClass("active-first");
              $("#case-3").addClass("active-second");
              $("#tab-1").removeClass("active");
              $("#tab-2").addClass("active");
              $("#tab-3").removeClass("active");
              break;
          case 2:
              console.log("slide-3");
              $(".bg-man .tabcontent").removeClass("active-first active-second active-third");
              $("#case-1").addClass("active-second");
              $("#case-2").addClass("active-third");
              $("#case-3").addClass("active-first");
              $("#tab-1").removeClass("active");
              $("#tab-2").removeClass("active");
              $("#tab-3").addClass("active");
              break
      }
  })
}

function datepicker() {
  $("#datepicker").datepicker({
      format: "dd-mm-yyyy",
      endDate: "-18y",
      autoclose: "true"
  })
}

// function emi_calculation() {
//   if ($(".lyt-section.typ-emi-cal").length == 1) {
//       var valueToNumber = $("#loanAmount").val().replace(",", "").replace(",", "").replace(",", "");
//       var principalValue = valueToNumber.replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "");
//       var rate = parseFloat($("#interestRate").val()) / 100 / 12;
//       var months = parseFloat($("#tenureRequired").val()) * 12;
//       $("#amount").html($("#loanAmount").val().toLocaleString('en-IN'));
//       console.log("Amount :" + principalValue, "Annual Interest: " + rate, "Total Months: " + months);
//       const x = Math.pow(1 + rate, months);
//       const monthly = principalValue * x * rate / (x - 1);
//       var monthlyPayment = Math.round(monthly);
//       var totalPayment = Math.round(monthly * months);
//       var totalInterest = Math.round(monthly * months - principalValue);
//       $("#interest").html(totalInterest.toLocaleString('en-IN'));
//       $("#totalPayable").html(totalPayment.toLocaleString('en-IN'));
//       $("#monthlyEmi").html(monthlyPayment.toLocaleString('en-IN'));
//       additionalRadius = Math.round(totalPayment * .61);
//       console.log(totalPayment);
//       console.log(principalValue);
//       // progress(totalPayment + additionalRadius - totalInterest, totalPayment)
//       progress(principalValue, totalPayment);
//       // progress(totalInterest, totalPayment);
//   }
// }

function emi_calculation() {
  if ($('.lyt-section.typ-emi-cal').length == 1) {
    // var principal = Number($('#loanAmount').val());
    var valueToNumber = ($('#loanAmount').val()).replace(',', '').replace(',', '').replace(',', '');
    var principalValue = valueToNumber.replace(' ', '').replace(' ', '').replace(' ', '').replace(' ', '').replace(' ', '').replace(' ', '').replace(' ', '').replace(' ', '').replace(' ', '');
    var rate = (parseFloat($('#interestRate').val())) / 100 / 12; //calculatedInterest
    var months = parseFloat($('#tenureRequired').val()) * 12; //calculatedPayments

    $('#amount').html($('#loanAmount').val().toLocaleString());

    console.log("Amount :" + principalValue, "Annual Interest: " + rate, "Total Months: " + months);
    // Calculate Montly Payments
    const x = Math.pow(1 + rate, months);
    const monthly = (principalValue * x * rate) / (x - 1);

    var monthlyPayment = Math.round(monthly);
    var totalPayment = Math.round((monthly * months));
    var totalInterest = Math.round((monthly * months - principalValue));

    $('#interest').html(totalInterest.toLocaleString('en-IN'));
    $('#totalPayable').html(totalPayment.toLocaleString('en-IN'))
    $('#monthlyEmi').html(monthlyPayment.toLocaleString('en-IN'));

    additionalRadius = Math.round(totalPayment * 0.61);
    progress(totalInterest, totalPayment);
  }
}

function rangeslider(inputrange) {
  var $rangeslider = $(inputrange);
  var $amount = $rangeslider.attr("data-input");
  if($amount == '.interest-rate' || $amount == '.tenure-requiredss'){
      emi_calculation();
     

      $rangeslider.rangeslider({
          polyfill: false,
          onSlide: function(position, value) {
              emi_calculation();
              
              var resw = value.toLocaleString('en-IN');
              $($amount).val(resw).change()
              
          },
          onSlideEnd: function(position, value) {
              emi_calculation()
          }
      });
  }

  $rangeslider.rangeslider({
      polyfill: false,
      onSlide: function(position, value) {
          emi_calculation();
          var resw = value.toLocaleString('en-IN');
          $($amount).val(resw).change();
      },
      onSlideEnd: function(position, value) {
          emi_calculation();
          $($amount).html('');
      }
  });

  $($amount).blur(function() {
    var min = $(this).attr('min');
    var max = $(this).attr("max");
    var ids = $(this).attr("id");
    var value = parseFloat($(this).val().replace(/,/g, ''));
    console.log($(this).val());
    if(min > value){
      $($amount).html('The minimum '+ ids +' is Rs.'+ min.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,") +' .');
      $rangeslider.val(parseFloat($(this).val().replace(/,/g, ''))).change();
      return;
    }
    
    if(max < value){
      $($amount).html('The maximum '+ ids +' limit exceeded.');
      $rangeslider.val(parseFloat($(this).val().replace(/,/g, ''))).change();
      return;
    }
    
    $($amount).html('');
    $rangeslider.val(parseFloat($(this).val().replace(/,/g, ''))).change(); 
  });


  
  $(".amountreq").focusout(function() {
        var x = $(this).val().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
        $(this).val(x)
  });

  $($amount).keypress(function(e) {
      var key = e.which;
      if (key == 13) {
        
        $rangeslider.val($(this).val()).change();
          return false
      }
  })
}

$(".range-inputs").keyup(function() {
  emi_calculation()
  
});

function img_height() {
  var height = $(".innerpage .hero-img .image-height").height();
  if ($(window).width() > 767.98) {
      $(".lyt-section.innerpage").css("height", height)
  }
}

function fb_slider() {
  var swiper = new Swiper(".fb-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
          0: {
              slidesPerView: 1,
              spaceBetween: 20,
              autoHeight: true
          },
          768: {
              slidesPerView: 2,
              spaceBetween: 20
          },
          1200: {
              slidesPerView: 3,
              spaceBetween: 30
          }
      },
      navigation: {
          nextEl: ".swiper-button-next.fb",
          prevEl: ".swiper-button-prev.fb"
      }
  })
}

function grid_slider() {
  var swiper = new Swiper(".grid-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      // autoHeight: true,
      breakpoints: {
          0: {
              slidesPerView: 1,
              spaceBetween: 20
          },
          768: {
              slidesPerView: 2,
              spaceBetween: 30
          },
          1024: {
              slidesPerView: 3,
              spaceBetween: 30
          }
      },
      navigation: {
          nextEl: ".swiper-button-next.grid-arrow",
          prevEl: ".swiper-button-prev.grid-arrow"
      }
  })
}

function overview_swiper() {
  if ($(window).width() > 992) {
      var swiper = new Swiper(".overview", {
          slidesPerView: "auto",
          spaceBetween: 10,
          direction: "vertical",
          freeMode: true,
          centeredSlides: false,
          loop: false,
          navigation: {
              nextEl: ".swiper-button-next.typ-overview",
              prevEl: ".swiper-button-prev.typ-overview"
          },
          autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter :true,
    },
          breakpoints: {
              640: {
                  loop: false,
                  freeMode: false
              },
              768: {
                  loop: true,
                  freeMode: true
              },
              1024: {
                  loop: true,
                  freeMode: true
              }
          }
      })
  }
}

function document_tab() {
  $(".offerItemTitle").click(function() {
      $(this).parents(".offerslide").children(".offerItem").removeClass("active");
      $(this).parents(".offerslide").children(".offerItem").children(".offerItemTitle").removeClass("hide");
      $(this).parent(".offerItem").addClass("active");
      $(this).addClass("hide")
  })
}

// function progress(percentAmount, total) {
//   if ($("#progress-bar").length == 1) {
//     function progressBar(progressVal,totalPercentageVal = 100) {
//       var strokeVal = (4.64 * 100) /  totalPercentageVal;
//     var x = document.querySelector('.progress-circle-prog');
//       x.style.strokeDasharray = progressVal * (strokeVal) + ' 999';
//     var el = document.querySelector('.progress-text'); 
//     var from = $('.progress-text').data('progress');
//     $('.progress-text').data('progress', progressVal);
//     var start = new Date().getTime();
    
//     setTimeout(function() {
//         var now = (new Date().getTime()) - start;
//         var progress = now / 700;
//         el.innerHTML = progressVal / totalPercentageVal * 100 + '%';
//         if (progress < 1) setTimeout(arguments.callee, 10);
//     }, 10);
  
//   }
//       progressBar(100, 200);
//   }
// }

function progress(percentAmount, total) {
  if ($('#progress-bar').length == 1) {
    function progressBar(progressVal,totalPercentageVal = 100) {
      var strokeVal = (7.52 * 100) /  totalPercentageVal;
    var x = document.querySelector('.progress-circle-prog');
      x.style.strokeDasharray = progressVal * (strokeVal) + ' 999';
    var el = document.querySelector('.progress-text'); 
    var from = $('.progress-text').data('progress');
    $('.progress-text').data('progress', progressVal);
    var start = new Date().getTime();
    
    setTimeout(function() {
        var now = (new Date().getTime()) - start;
        var progress = now / 700;
        el.innerHTML = progressVal / totalPercentageVal * 100 + '%';
        if (progress < 1) setTimeout(arguments.callee, 10);
    }, 10);
  
  }

    progressBar(percentAmount, total);
  }
}

function home_tab() {
  $("#flexRadioDefault3").click(function(event) {
      if ($(this).val() == "Salaried") {
          $(".newcredit").show()
      }
  });
  $(".submit1").click(function(event) {
      if ($(".datepic").val().length == 0) {
          event.preventDefault();
          $(".contactmessagetime").html("Field is required")
      } else {
          $("#newss").attr("id", "tab2");
          $(".contactmessagetime").html("")
      }
  });
  $(".newrows").hide();
  $("#propertyDefault1").click(function(event) {
      if ($(this).val() == "yes") {
          $(".newrows").show()
      }
  });
  $("#propertyDefault2").click(function(event) {
      if ($(this).val() == "no") {
          $(".newrows").hide()
      }
  });
  $(".submit2").click(function(event) {
      if ($(".contact2").val().length == 0) {
          event.preventDefault();
          $(".contactmessageyes").html("Field is required")
      } else {
          if (IsMobile($(".contact2").val()) == false) {
              event.preventDefault();
              $(".contactmessageyes").html("Contact must have 10 digits")
          } else {
              var home_loans = $("input[name=flexRadioDefaults]:checked").val();
              var loan_amount = $(".loan_amount").val();
              var loan_tenure = $(".loan_tenure").val();
              var genders = $("input[name=flexRadioDefaultgender]:checked").val();
              var datepic = $(".datepic").val();
              var salarys = $("input[name=flexRadioDefaultss]:checked").val();
              var salary_credit = $("input[name=salary_credit]:checked").val();
              var annual_income = $(".annual_income").val();
              var existing = $(".existing").val();
              var coapplicant = $(".coapplicant").val();
              var radioyesno = $("input[name=radioyesno]:checked").val();
              var propert_val = $(".propert_val").val();
              var property = $(".property").val();
              var usage = $(".usage").val();
              var agreement = $(".agreement").val();
              var contact2 = $(".contact2").val();
              var companys = $(".companys").val();
              var csrfName = $(".txt_csrfname").attr("name");
              var csrfHash = $(".txt_csrfname").val();
              $.ajax({
                  url: "<?php echo base_url('Dashboard/formss'); ?>",
                  async: false,
                  type: "post",
                  dataType: "json",
                  data: {
                      phone: contact2,
                      home_loans: home_loans,
                      loan_amount: loan_amount,
                      loan_tenure: loan_tenure,
                      genders: genders,
                      datepic: datepic,
                      salarys: salarys,
                      salary_credit: salary_credit,
                      annual_income: annual_income,
                      existing: existing,
                      coapplicant: coapplicant,
                      radioyesno: radioyesno,
                      coapplicant: coapplicant,
                      propert_val: propert_val,
                      property: property,
                      usage: usage,
                      agreement: agreement,
                      companys: companys,
                      [csrfName]: csrfHash
                  },
                  success: function(data) {
                      sessionStorage.setItem("api_data", data);
                      window.location.replace("<?= base_url('apply/checkouts')?>")
                  }
              });
              $(".contactmessageyes").html("")
          }
      }
  });
  $("#flexRadioDefault4").click(function(event) {
      if ($(this).val() == "Self Employed") {
          $(".newcredit").hide()
      }
  })
}

function IsMobile(mobileNum) {
  var validateMobNum = /^\d*(?:\.\d{1,2})?$/;
  if (validateMobNum.test(mobileNum) && mobileNum.length == 10) {
      return true
  } else {
      return false
  }
}

function file_upload(){
    $('.file-upload').change(function() {
        var file = $(this)[0].files[0].name;
        $(this).prev('label').text(file);
        $(this).prev('label').css('color','rgba(255,255,255,.3)');
      });
  }
  
  // function scroll_modal(){
  //     $("scrollLink").click(function(event) {
  //         event.preventDefault();
  //         $("html, body").animate({
  //             scrollTop: $("#career-form").offset().top
  //           }, 1000);		 
  //       });
    
  // }




$(function() {
  // test_slider();
  home_tab();
  document_tab();
  overview_swiper();
  header();
  // maginfic_popup();
  customer_say();
  customer_say2();
  counter();
  counter_scroll();
  media_slider();
  client_slider();
  select2();
  // propertytype();
  tab_section();
  rangeslider(".js-amount-range1");
  rangeslider(".js-amount-range2");
  rangeslider(".js-amount-range3");
  rangeslider(".js-amount-range4");
  rangeslider(".js-amount-range5");
  rangeslider(".js-amount-range6");
  rangeslider(".js-amount-range7");
  rangeslider(".js-amount-range8");
  rangeslider(".js-amount-range9");
  rangeslider(".js-amount-range10");
  rangeslider(".js-loan-amount");
  // rangeslider(".js-loan-amounts");
  rangeslider(".js-interest-rate");
  rangeslider(".js-tenure-required");
  rangeslider(".js-loan-amounts");
  rangeslider(".js-loan-amounte");
  rangeslider(".js-tenure-requireds");
  rangeslider(".js-tenure-requirede");
  datepicker();
  fb_slider();
  grid_slider();
  progress();
  emi_calculation();
  set_background();
  newSwipe();
  client_invester();
  family_invester();
  bank_partner();
  mobile_slider();
  file_upload();

  // scroll_modal();
});

(function(){

    var doc = document.documentElement;
    var w = window;
  
    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;
  
    // var header = document.getElementsByClassName("bs-header");
    var header = document.getElementById('site-header');
  
    var checkScroll = function() {
  
      /*
      ** Find the direction of scroll
      ** 0 - initial, 1 - up, 2 - down
      */
  
      curScroll = w.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) { 
        //scrolled up
        direction = 2;
      }
      else if (curScroll < prevScroll) { 
        //scrolled down
        direction = 1;
      }
  
      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }
  
      prevScroll = curScroll;
    };
  
    var toggleHeader = function(direction, curScroll) {
      if (direction === 2 && curScroll > 52) { 
  
        //replace 52 with the height of your header in px
  
        header.classList.add('hide');
        prevDirection = direction;
      }
      else if (direction === 1) {
        header.classList.remove('hide');
        prevDirection = direction;
      }
    };
  
    window.addEventListener('scroll', checkScroll);
  
  })();
  
  document.addEventListener("click",function (e){
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
  })
  
  
  // $('.file-upload').file_upload();
  // $('.file-upload').file_upload();

var words = ['With Entrepreneurial Skills', 'With Fresh Minds', 'Redefining Homeownership ', ' Who Openly Accept Challenges', 'With Unique Ideas'],
part,
i = 0,
offset = 0,
len = words.length,
forwards = true,
skip_count = 0,
skip_delay = 15,
speed = 70;
var wordflick = function () {
setInterval(function () {
if (forwards) {
  if (offset >= words[i].length) {
    ++skip_count;
    if (skip_count == skip_delay) {
      forwards = false;
      skip_count = 0;
    }
  }
}
else {
  if (offset == 0) {
    forwards = true;
    i++;
    offset = 0;
    if (i >= len) {
      i = 0;
    }
  }
}
part = words[i].substr(0, offset);
if (skip_count == 0) {
  if (forwards) {
    offset++;
  }
  else {
    offset--;
  }
}
$('.word').text(part);
},speed);
};

$(document).ready(function () {
wordflick();
});

//tags active tracker-status

$('.rb .rb-item.active:last').addClass('border-change');





function only_alphabetic(txt) 
{
        txt.value = txt.value.replace(/[^a-zA-Z \n\r]+/g, '');
}

function only_numeric(txt) 
{
        txt.value = txt.value.replace(/[^ 0-9\n\r]+/g, '');
}





//for clicking on user icon

document.querySelector(".user-profile").addEventListener("click", function () {
  const loginHover = document.querySelector(".login-hover");
  if (loginHover.style.display === "block") {
    loginHover.style.display = "none";
  } else {
    loginHover.style.display = "block";
  }
});