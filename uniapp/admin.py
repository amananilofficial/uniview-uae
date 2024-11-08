from django.contrib import admin
from .models import About, Image, Product, Solution, News, Video, Career, Inquiry, NewsletterSubscription, Blogges, Category
from django.utils.html import format_html


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'background_image')
    search_fields = ('name',)
    ordering = ('-name',)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'stock_quantity',
                    'created_at', 'is_active')
    search_fields = ('name', 'description')
    ordering = ('-created_at',)
    list_filter = ('category', 'is_active')


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ('product', 'image')


@admin.register(Solution)
class SolutionAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'is_featured')
    search_fields = ('title',)
    ordering = ('-created_at',)


@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ('title', 'updated_at')
    search_fields = ('title',)
    ordering = ('-updated_at',)


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'published_at')
    search_fields = ('title',)
    ordering = ('-published_at',)


@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'description')
    search_fields = ('title',)
    ordering = ('-created_at',)


@admin.register(Career)
class CareerAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ('title',)
    ordering = ('-created_at',)


@admin.register(NewsletterSubscription)
class NewsletterSubscriptionAdmin(admin.ModelAdmin):
    list_display = ('given_name', 'family_name', 'email',
                    'company', 'country_region', 'created_at')
    search_fields = ('email', 'given_name', 'family_name', 'company')
    ordering = ['-created_at']


@admin.register(Blogges)
class BloggesAdmin(admin.ModelAdmin):
    list_display = ('title', 'article', 'image')
    search_fields = ('title', 'article')
    fields = ('title', 'article', 'image')
    list_filter = ()
    ordering = ('-id',)


@admin.register(Inquiry)
class InquiryAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone_number',
                    'subject', 'created_at', 'issue')
    search_fields = ('name', 'email', 'subject')
    ordering = ('-created_at',)
    fieldsets = (
        (None, {
            'fields': ('name', 'email', 'phone_number', 'subject', 'issue')
        }),
        ('Date Information', {
            'fields': ('created_at',),
            'classes': ('collapse',),
        }),
    )
    readonly_fields = ('created_at',)
