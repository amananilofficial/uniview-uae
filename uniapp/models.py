from django.db import models
from django.utils import timezone
from django.views.generic import ListView
from django.urls import reverse
from django.utils.html import format_html


class Category(models.Model):
    name = models.CharField(max_length=100)
    background_image = models.ImageField(
        upload_to='category_images/', null=True, blank=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return f"/category/{self.id}/"

    class Meta:
        verbose_name_plural = "Categories"
        ordering = ['name']


class Product(models.Model):
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name='products')
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField()
    price = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True)
    stock_quantity = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('product_detail', kwargs={'pk': self.pk})

    class Meta:
        verbose_name_plural = "Products"
        ordering = ['-created_at']


class Image(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(upload_to="product_images/")

    def __str__(self):
        return f"{self.product.name} - Image"


class Solution(models.Model):
    title = models.CharField(max_length=100, unique=True)
    details = models.TextField()
    icon = models.ImageField(
        upload_to='icons/', null=False, default='default_icon.jpg')
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Solutions"
        ordering = ['-created_at']


class About(models.Model):
    title = models.CharField(max_length=200, unique=True)
    content = models.TextField()
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "About Us Content"


class News(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    published_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "News"
        ordering = ['-published_at']


class Career(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    requirements = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Careers"
        ordering = ['-created_at']


class Inquiry(models.Model):
    ISSUE_CHOICES = [
        ('billing', 'Billing'),
        ('technical', 'Technical Issue'),
        ('general', 'General Inquiry'),
        ('other', 'Other'),
        ('product', 'Product'),
        ('solution', 'Solution'),
        ('sales', 'Sales'),
        ('support', 'Support'),
    ]

    name = models.CharField(max_length=100, null=False, default='')
    email = models.EmailField(max_length=255, null=False, default='')
    phone_number = models.CharField(
        max_length=15, null=False, default='')
    subject = models.CharField(max_length=200, null=False, default='')
    message = models.TextField(max_length=1000, null=False, default='')
    company_name = models.CharField(
        max_length=255, null=False, default='')
    company_address = models.CharField(
        max_length=255, null=True, default='')
    issue = models.CharField(
        max_length=255, choices=ISSUE_CHOICES, default='')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Inquiry from {self.name} - {self.subject}"

    class Meta:
        verbose_name_plural = "Inquiries"
        ordering = ['-created_at']


class NewsletterSubscription(models.Model):
    email = models.EmailField()
    given_name = models.CharField(max_length=100)
    family_name = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    country_region = models.CharField(
        max_length=100, blank=True, null=True, default='Not Provided')
    job_title = models.CharField(max_length=100, blank=True, null=True)
    phone = models.CharField(max_length=15, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.given_name} {self.family_name} ({self.email})"

    class Meta:
        verbose_name_plural = "Newsletter Subscriptions"
        ordering = ['-created_at']


class Blogges(models.Model):
    title = models.CharField(max_length=255)
    article = models.TextField()
    image = models.ImageField(
        upload_to='blogges/images/', blank=True, null=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Blogges"
        ordering = ['-id']


class Video(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(
        blank=True, null=True, default='No description provided.')
    video_file = models.FileField(upload_to='videos/', blank=True, null=True)
    url = models.URLField(default="", blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Videos"
        ordering = ['-created_at']
