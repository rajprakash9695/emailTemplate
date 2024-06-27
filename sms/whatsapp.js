export const WaTemplates = {
  GIP_FIRST_PLAN: `june24_first_time_plan_initialised__
  {{username}}, {{plan_id}}`,
  GIP_INSTALLMENT_ALERT: `june24_every_installment_alert
{{username}}, {{plan_id}}, {number}}`,
  GIP_UNPAID_SKIP: `june24_unpaid_skip_clone 
  {{username}}, {{due_date}}`,
  GIP_UNPAID_INSTALLMENT: `june24_unpaid_installment__clone
{{username}}, {{plan_id}}`,
  APPOINTMENT_SELL_GOLD: `june24_sell_old_gold_
 {{username}}, {{weight}}, {{amount}},`,
  APPOINTMENT_UPLOAD_GOLD: `june24_upload_gold_
  {{username}}, {{weight}}`,
  RESERVE_SUCCESS: `june24_sell_and_reserve__clone
{{username}}, {{weight}}, {{amount}}, {{last_Installmentdate}},  {{link}}`,
  GIFT_RECEIVED: `june24_mygold_user_who_receives_gold 
{{username}},  {{weight}}, {{username_of_sender}},  {{link}}`,
  GIFT_RECEIVED_NEW_USER: `june24_new_user_who_receives_the_gold 
  {username}},  {{weight}}, {{username_of_sender}}`,
  NOMINEE_NOTIFY: `june24_nominee_added_notify_nominee_
{{username}}, {{username_of_sender}}`,
  DAAN_SUCCESS: `june24_daan_gold_if_app_downloaded
{{amount}}, {{weight}}, {{Trust_Name}}`,
  DAAN_NEW_USER: `june24_daan_gold_if_app_not_downloaded
{{amount}}, {{weight}}, {{Trust_Name}}`,
};
