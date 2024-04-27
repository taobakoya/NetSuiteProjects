/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(['N/email', 'N/record', 'N/redirect', 'N/ui/serverWidget'],
    /**
 * @param{email} email
 * @param{record} record
 * @param{redirect} redirect
 * @param{serverWidget} serverWidget
 */
    (email, record, redirect, serverWidget) => {
        /**
         * Defines the Suitelet script trigger point.
         * @param {Object} context
         * @param {ServerRequest} context.request - Incoming request
         * @param {ServerResponse} context.response - Suitelet response
         * @since 2015.2
         */
        const onRequest = (context) =>
        {
            var request = context.request;
            var response = context.response;

            var form = serverWidget.createForm({
                title: 'Employee On-boarding',
                hideNavBar: false
            });

            var employeeInoGrp = form.addFieldGroup({
                id: 'custpage_grp_employeeinfo',
                label: 'Employee Information'
            });

            var meetingSupervisor = form.addFieldGroup({
                id: 'custpage_grp_meetSupervisor',
                label: 'Meeting with Supervisor'
            });

            var welcomeEmail = form.addFieldGroup({
                id: 'custpage_grp_welcomeemail',
                label:'Welcome Email'
            });

            var firstNameFld =form.addField({
                id: 'custpage_nfo_fname',
                type: serverWidget.FieldType.TEXT,
                label: 'First Name',
                container: 'custpage_grp_employeeinfo'
            });

            var middleNameFld = form.addField({
                id: 'custpage_nfo_mname',
                type: serverWidget.FieldType.TEXT,
                label: 'Middle Name',
                container:'custpage_grp_employeeinfo'
            });

            var lastNameFld = form.addField({
                id: 'custpage_nfo_lname',
                type: serverWidget.FieldType.TEXT,
                label: 'Last Name',
                container:'custpage_grp_employeeinfo'
            });

            var emailFld =form.addField({
                id: 'custpage_nfo_email',
                type: serverWidget.FieldType.EMAIL,
                label: 'Email',
                container: 'custpage_grp_employeeinfo'
            });

            var supervisorFld = form.addField({
                id: 'custpage_nfo_supervisor',
                type: serverWidget.FieldType.SELECT,
                label: 'Supervisor',
                source: 'employee',
                container: 'custpage_grp_employeeinfo'
            });

            var subsidiaryFld = form.addField({
                id: 'custpage_nfo_subsidiary',
                type: serverWidget.FieldType.SELECT,
                label: 'Subsidiary',
                source: 'subsidiary',
                container: 'custpage_grp_employeeinfo'
            });

            var titleFld = form.addField({
                id: 'custpage_ms_title',
                type: serverWidget.FieldType.TEXT,
                label: 'Title',
                container: 'custpage_grp_meetSupervisor'
            });

            var supervisorMessageFld = form.addField({
                id: 'custpage_ms_message',
                type: serverWidget.FieldType.TEXTAREA,
                label: 'Message',
                container: 'custpage_grp_meetSupervisor'
            });

            var subjectFld = form.addFieldGroup({
                id: 'custpage_we_subject',
                type: serverWidget.FieldType.TEXT,
                label: 'Subject',
                container: 'custpage_grp_welcomeemail'
            });

            var emailMessageFld =form.addField({
                id: 'custpage_we_message',
                type:serverWidget.FieldType.TEXTAREA,
                labe: 'Message',
                container: 'custpage_grp_welcomeemail'
            });
            form.addSubmitButton();

            response.writePage(form);
        }

        return {onRequest}

    });
