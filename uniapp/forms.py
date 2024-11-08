from django import forms
from .models import Inquiry, NewsletterSubscription


class InquiryForm(forms.ModelForm):
    class Meta:
        model = Inquiry
        fields = [
            'name', 'email', 'phone_number', 'subject',
            'company_name', 'company_address', 'issue', 'message'
        ]
        widgets = {
            'message': forms.Textarea(attrs={'rows': 5}),
        }
        labels = {
            'name': 'Full Name',
            'email': 'Email Address',
            'phone_number': 'Phone Number',
            'subject': 'Subject',
            'company_name': 'Company Name',
            'company_address': 'Company Address',
            'issue': 'Issue Type',
            'message': 'Your Message',
        }


class NewsletterForm(forms.ModelForm):
    class Meta:
        model = NewsletterSubscription
        fields = [
            'email', 'given_name', 'family_name', 'company',
            'country_region', 'job_title', 'phone'
        ]
        labels = {
            'email': 'Email Address',
            'given_name': 'Given Name',
            'family_name': 'Family Name',
            'company': 'Company',
            'job_title': 'Job Title',
            'phone': 'Phone Number',
        }
