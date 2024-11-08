from django.shortcuts import render, get_object_or_404
from .models import Product
from django.views.generic import DetailView, ListView, View, TemplateView
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .forms import InquiryForm, NewsletterForm
from django.shortcuts import render, redirect, get_object_or_404, get_list_or_404
from django.contrib import messages
from .models import (
    Category, Product, Solution, About,
    News, Video, Career, Blogges, NewsletterSubscription,
)
# Product Views


class SolutionListView(ListView):
    model = Solution
    template_name = 'uniapp/solutionlist.html'
    context_object_name = 'solutions'


class SolutionDetailView(DetailView):
    model = Solution
    template_name = 'uniapp/solutiondetail.html'
    context_object_name = 'solution'

# About View


def about_view(request):
    about = About.objects.first()
    return render(request, 'uniapp/about.html', {'about': about})

# News Views


class NewsListView(ListView):
    model = News
    template_name = 'uniapp/latestnews.html'
    context_object_name = 'latestnews'
    ordering = ['-published_at']


class NewsDetailView(DetailView):
    model = News
    template_name = 'uniapp/latestnews.html'
    context_object_name = 'latestnews'


class VideoListView(ListView):
    model = Video
    template_name = 'uniapp/videos.html'
    context_object_name = 'videos'
    ordering = ['-uploaded_at']
    paginate_by = 10

    def get_queryset(self):
        return Video.objects.all().order_by('-uploaded_at')


class CareerListView(ListView):
    model = Career
    template_name = 'uniapp/career.html'
    context_object_name = 'careers'


class CareerDetailView(DetailView):
    model = Career
    template_name = 'uniapp/career.html'
    context_object_name = 'career'


def inquiry_form(request):
    if request.method == 'POST':
        form = InquiryForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
        else:
            return render(request, 'uniapp/form.html', {'form': form})
    else:
        form = InquiryForm()
    return render(request, 'uniapp/form.html', {'form': form})


def newsletter_view(request):
    if request.method == 'POST':
        form = NewsletterForm(request.POST)

        if form.is_valid():
            form.save()
            messages.success(request, "Subscription successful!")
            return redirect('newsletter')
        else:
            messages.error(
                request, "There was an error with your submission. Please check the fields and try again.")
    else:
        form = NewsletterForm()

    return render(request, 'uniapp/newsletter.html', {
        'form': form,
    })


def index(request):
    return render(request, 'uniapp/index.html')


def contact_view(request):
    return render(request, 'uniapp/contact.html')


def product_view(request):
    return render(request, 'uniapp/products.html')


def solutions_view(request):
    return render(request, 'uniapp/solutions.html')


def global_english_view(request):
    return render(request, 'uniapp/global_english.html')


def arabic_view(request):
    return render(request, 'uniapp/arabic.html')


def careers_view(request):
    return render(request, 'uniapp/career.html')


def inquiry_view(request):
    return render(request, 'uniapp/inquiry.html')


def video_view(request):
    return render(request, 'uniapp/videos.html', {})


def video_detail_view(request, video_id):
    video = get_object_or_404(Video, id=video_id)
    return render(request, 'uniapp/videos.html', {'video': video})


def video_page_view(request, video_id):
    video = get_object_or_404(Video, id=video_id)
    return render(request, 'uniapp/videos.html', {'video': video})


def videos_view(request):
    videos = Video.objects.all()
    return render(request, 'uniapp/videos.html', {'videos': videos})


def form_view(request):
    return render(request, 'uniapp/form.html')


def video_page_view(request, page_num):
    all_videos = get_list_or_404(Video.objects.order_by('id'))
    paginator = Paginator(all_videos, 10)

    try:
        videos = paginator.page(page_num)
    except PageNotAnInteger:
        videos = paginator.page(1)
    except EmptyPage:
        videos = paginator.page(paginator.num_pages)

    return render(request, 'uniapp/videos.html', {
        'videos': videos,
        'page_num': page_num,
        'is_paginated': True,
        'paginator': paginator
    })


class VideoListView(ListView):
    model = Video
    template_name = 'uniapp/videos.html'
    context_object_name = 'videos'
    paginate_by = 10

    def get_queryset(self):
        return Video.objects.all().order_by('-created_at')


class VideoDetailView(DetailView):
    model = Video
    template_name = 'uniapp/videos.html'
    context_object_name = 'video'

    def get_object(self):
        return get_object_or_404(Video, id=self.kwargs['video_id'])


def events_view(request):
    return render(request, 'uniapp/events.html')


def videos_view(request):
    return render(request, 'uniapp/videos.html')


def form_view(request):
    return render(request, 'uniapp/form.html')


class VideoListView(ListView):
    model = Video
    template_name = 'uniapp/videos.html'
    context_object_name = 'videos'
    paginate_by = 10

    def get_queryset(self):
        return Video.objects.all().order_by('-created_at')


class VideoPageView(View):
    def get(self, request):
        videos = Video.objects.all()
        context = {
            'videos': videos,
        }
        return render(request, 'uniapp/videos.html', context)


class BuildingView(TemplateView):
    template_name = 'uniapp/building.html'


class RetailView(TemplateView):
    template_name = 'uniapp/retail.html'


class BankView(TemplateView):
    template_name = 'uniapp/bank.html'


class SchoolView(TemplateView):
    template_name = 'uniapp/school.html'


class ShoppingView(TemplateView):
    template_name = 'uniapp/shoppingmall.html'


class HospitalView(TemplateView):
    template_name = 'uniapp/hospital.html'


class HotelView(TemplateView):
    template_name = 'uniapp/hotel.html'


class StadiumView(TemplateView):
    template_name = 'uniapp/stadium.html'


class WarehouseView(TemplateView):
    template_name = 'uniapp/warehouse.html'


class SmartIntrusionPreventionView(TemplateView):
    template_name = 'uniapp/smart.html'


def product_detail(request, pk):
    product = Product.objects.get(pk=pk)
    return render(request, "uniapp/productdetail.html", {"product": product})


def cookie_policy_view(request):
    return render(request, 'uniapp/cookiepolicy.html')


def blogges_list(request):
    blogges_entries = Blogges.objects.all()
    return render(request, 'uniapp/blogges.html', {'blogges_entries': blogges_entries})


class CategoryListView(ListView):
    model = Category
    template_name = 'uniapp/products.html'
    context_object_name = 'categories'


def category_list(request):
    categories = Category.objects.all()
    return render(request, 'uniapp/products.html', {'categories': categories})


class ProductListView(ListView):
    model = Product
    template_name = 'uniapp/products.html'
    context_object_name = 'products'

    def get_queryset(self):
        self.category = get_object_or_404(Category, slug=self.kwargs['slug'])
        queryset = self.category.products.filter(is_active=True)
        search_query = self.request.GET.get('search', '')
        if search_query:
            queryset = queryset.filter(name__icontains=search_query)
        selected_categories = self.request.GET.getlist('categories')
        if selected_categories:
            queryset = queryset.filter(category__id__in=selected_categories)
        return queryset

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['category'] = self.category
        context['product_categories'] = Category.objects.all()
        return context


class ProductDetailView(DetailView):
    model = Product
    template_name = 'uniapp/productdetail.html'
    context_object_name = 'product'
