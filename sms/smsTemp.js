export const SmsTemplates = {
  BUY_DIGI_GOLD: `Dear {{name}}, You have purchased {{quantity}} grams of Gold worth ₹ {{amount}}. Download Tax Invoice: https://mygld.in/{{route}} MyGold, Karo Befikar!`,

  SELL_DIGI_GOLD: `Dear {{name}}, You have sold {{quantity}} grams of Gold worth ₹ {{amount}}. Download Purchased Confirmation: https://mygld.in/{{route}} MyGold, Karo Befikar!`,

  GIP_FIRST_PLAN: `Congratulations {{name}}, You have started your first MyGold Savings Plan {{gipId}}! View Plan Details: https://mygld.in/{{route}}. MyGold, Karo Befikar!`,

  GIP_INSTALLMENT_ALERT: `Reminder: {{daysLeft}} days left to pay your installment for MyGold Savings Plan ID {{planId}}! Make your payment https://mygld.in/{{route}}. MyGold, Karo Befikar!`,

  GIP_INSTALLMENT_PAID: `MyGold Savings Plan {{planId}}: Your installments has been successfully paid! View Payment Confirmation Details: https://mygld.in/{{route}}. MyGold, Karo Befikar!`,

  GIP_SKIP_APPLIED: `MyGold Savings Plan {{planId}}: Skip number {{curSkip}} applied! You have {{leftSkip}} skips remaining. Please remember to pay the Monthly Installment by the end of this month. MyGold, Karo Befikar!`,

  GIP_UNPAID_SKIP: `MyGold Savings Plan ID {{gipId}}: Just {{daysLeft}} days remaining! Ensure you pay your monthly installment by {{date}} to keep enjoying the benefits of your plan. Make your payment here: https://mygld.in/{{route}}. MyGold, Karo Befikar!.`,

  GIP_UNPAID_INSTALLMENT: `MyGold Savings Plan ID {{gipId}}: Your monthly installment for {{valueString}} is overdue. To prevent cancellation, please make the payment soon. Payment Link: https://mygld.in/{{route}}. MyGold, Karo Befikar!`,

  GIP_ALL_INSTALLMENT_PAID: `Your MyGold Savings Plan {{gipId}} is now complete! The added Gold is available in your account. The bonus will be unlocked upon plan maturity. View Your Plan Details Here: https://mygld.in/{{route}} MyGold, Karo Befikar!`,

  GIP_CANCEL: `You have canceled MyGold Savings Plan {#var#}. To See the details Click here: https://mygld.in/{#var#}. MyGold, Karo Befikar!`,

  GIP_FORFEITED: `Because of missed payments, your MyGold Savings Plan {{gipId}} has been forfeited. The accumulated Gold has been credited to your MyGold Bank, and no bonuses will be applied. Regards - MyGold, Karo Befikar!!`,

  GIP_MATURED: `Congratulations, MyGold Savings Plan {{gipId}} has matured! The accumulated Gold from MyGold Savings Plan {{gipId}} and the Plan Bonus are now available in your MyGold Bank account to redeem. To See the details Click here: https://mygld.in/{{route}} MyGold, Karo Befikar!`,

  GIP_PRE_INSTALLMENT: `Congratulations, You have pre-paid {{installmentCount}} installments of Your MyGold Savings Plan {{gipId}} up till {{nextDueDate}}! To See the details Click here: https://mygld.in/{{route}}. MyGold, Karo Befikar!`,

  APPOINTMENT_BOOKED: `MyGold Verification Appointment {{appId}} has been booked. Payment Receipt: https://mygld.in/{{route}} MyGold, Karo Befikar!`,

  APPOINTMENT_RESCHEDULED: `MyGold Verification Appointment no. {{appId}} has been rescheduled to: {{dateTime}}. MyGold, Karo Befikar!`,

  APPOINTMENT_CANCELED: `Your appointment has been canceled. We have started your refund, and it will be reflected in your account in 3-5 business days. MyGold, Karo Befikar!`,

  APPOINTMENT_VERIFIER_ASSIGNED: `Verification Appointment: A Verifier has been assigned. Following Details: Name: {{name}}, Mobile Number: {{mobile}} MyGold, Karo Befikar!`,

  APPOINTMENT_VERIFIER_STARTED: `MyGold Order Update: Your Verifier Van has started from our location, it will be reaching you in {{minutes}} minutes.`,

  APPOINTMENT_VERIFIER_REACHED: `MyGold Order Update: The Verifier officer has reached your location. Please submit your physical Gold for further procedures. For more assistance, call {{mobile}}.`,
  //
  APPOINTMENT_START_OTP: `OTP for verification has been sent to your MyGold App. Click https://mygld.in/{{route}} to View OTP and initiate the Verification process. MyGold, Karo Befikar!!`,

  APPOINTMENT_SELL_GOLD: `Congratulations, you have successfully uploaded {{quantity}} grams of Gold. Sona Badega, Life Chamkega! View Upload Gold details Click here https://mygld.in/{{route}}. MyGold, Karo Befikar!`,

  APPOINTMENT_UPLOAD_GOLD: `Congratulations! You have successfully sold {{quantity}} grams of Gold 🎉 ₹{{amount}} will be deposited within 72 hours in your updated bank account. To See the details Click here: https://mygld.in/{{route}}. MyGold, Karo Befikar!`,

  RESERVE_SUCCESS: `You have reserved {{quantity}} grams of Gold at the buy Rate of ₹{{rate}} up till {{dateTime}}! 🎉 ₹{{amount}} will be credited to your Bank account within 72 working hours. MyGold, Karo Befikar! * T&C Applied`,

  RESERVE_BUY_BACK: `You have bought back {{quantity}} grams of Gold on your sell Reserved Rate! 🎉 Please Note Held Gold for Installments for the remaining {{remainingMonth}} months have been released. MyGold, Karo Befikar!`,

  GIFT_SENT_GOLD_BANK: `"A Gift as sparkling as your Relationship" You have Gifted {{quantity}} grams of Gold to {{user}}! MyGold, Karo Befikar!`,

  GIFT_SENT_PAY: `"A Gift as sparkling as your Relationship" You have Gifted {{quantity}} grams of Gold worth Rs. {{amount}} to {{user}}! MyGold, Karo Befikar!`,

  GIFT_RECEIVED: `"A Gift as sparkling as your Relationship" Congratulations! You have received {{quantity}} grams of Gold from {{user}} on MyGold App! 🎉 Download The App Now {#var#} MyGold, Karo Befikar!`,

  GIFT_RECEIVED_NEW_USER: `"A Gift as sparkling as your Relationship" Congratulations! You have received {{quantity}} grams of Gold from {{sender}} on MyGold App! 🎉 Download The App Now {{link}} MyGold, Karo Befikar!`,

  GIP_REFERRAL_MATURED: `Congratulations! Your Referral's MyGold Savings Plan has matured. {{quantity}} gram Gold earned has been added to your MyGold Bank Balance. Continue to Refer & Earn https://mygld.in/{{route}} MyGold, Karo Befikar!`,

  GIP_REFERRER_INSTALLMENT_ALERT: `Motivate your Referral {{quantity}} to continue saving in Gold, Kyunki Life Abhi Chamakan Baki Hai Continue to Refer & Earn https://mygld.in/{{route}} MyGold, Karo Befikar!`,

  NOMINEE_NOTIFY: `This is to bring to your kind notice that {#var#} has added you as a nominee to MyGold account. MyGold, Karo Befikar! Download the App Now- https://mygld.in/{#var#}`,

  ORDER_PLACED: `MyGold Order Update: Your Order {{orderId}} has been placed. MyGold, Karo Befikar!`,

  ORDER_CANCELED: `MyGold Order Update: Your order {{orderId}} has been canceled by you. MyGold, Karo Befikar!`,

  ORDER_TRANSIT: `MyGold Order Update: Your order {{orderId}} has been shipped. Track your order here: {{link}} MyGold, Karo Befikar!`,

  ORDER_DELIVERED: `MyGold Order Update: We have delivered your order {{orderId}} on {{date}}. Hope you find joy that brings a smile to your face. See Order Details: {{link}} MyGold, Karo Befikar!`,

  RETURN_ORDER_PLACED: `MyGold Order Update: Return request for order {{orderId}} has been registered by you. MyGold, Karo Befikar!`,

  RETURN_ORDER_PROCESS_STARTED: `MyGold Order Update: Your Order {{orderId}} return has been initiated. We will collect the package soon. MyGold, Karo Befikar!`,
  //
  RETURN_ORDER_ACCEPTED: `MyGold Order Update: A full refund against the return of your order {{orderId}} has been Approved. Click the https://mygld.in/{{route}} to Kindly Process a Refund. MyGold, Karo Befikar!`,

  RETURN_ORDER_REJECTED: `MyGold Order Update: The return request for your order {{orderId}} has been rejected. Details of the Return shall be updated. View Details: {{link}}. MyGold, Karo Befikar!`,

  RETURN_ORDER_TRANSIT: `MyGold Order Update: Your return order {{orderId}} has been dispatched. It will be delivered to your address soon. Track Order: {{link}}. MyGold, Karo Befikar!`,

  RETURN_ORDER_DELIVERED: `MyGold Order Update: We've successfully delivered your return order {{orderId}} to your address at {#var#} today. MyGold, Karo Befikar!`,

  DAAN_SUCCESS: `सोने का दान, प्रभु का मान प्रभु को {{amount}} रुपये का {{quantity}} ग्राम सोने का दान कर अपनी श्रद्धा का दिया आपने नया प्रमाण धन्यवाद ! {#var#} Serviced By MyGold, Karo Befikar! Tax Invoice- https://mygld.in/{{route}}`,

  REGISTER_OTP: `MyGold Login OTP: {{otp}} Valid for {{minutes}} minutes. If the OTP was not requested by you, reply with "Not Me" {{hash}}`,

  GENERAL_OTP: `Your MyGold OTP for authorization of process is {{otp}}. Valid for {{minutes}} minutes. Never share this OTP with anyone. Sona Badega, Life Chamkega! MyGold - Karo Befikar!`,
};
