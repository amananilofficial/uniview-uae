from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from .views import (
    CategoryListView,
    ProductDetailView,
    ProductListView,
    VideoDetailView,
    VideoListView,
    blogges_list,
    category_list,
    index,
    about_view,
    contact_view,
    inquiry_form,
    newsletter_view,
    product_view,
    solutions_view,
    global_english_view,
    arabic_view,
    careers_view,
    inquiry_view,
    cookie_policy_view,
    video_view,
    form_view,
    VideoPageView,
    BankView,
    BuildingView,
    HotelView,
    StadiumView,    
    WarehouseView,   
    SchoolView,
    ShoppingView,
    HospitalView,
    RetailView,
    SmartIntrusionPreventionView,
    ShoppingView,
)

urlpatterns = [
    path('', index, name='index'),                                                        # Home page
    path('about/', about_view, name='about'),                                             # About page
    path('contact/', contact_view, name='contact'),                                       # Contact page
    path('products/', product_view, name='product'),                                      # Products page
    path('solutions/', solutions_view, name='solutions'),                                 # Solutions page
    path('global-english/', global_english_view, name='global_english'),                  # Global English page
    path('arabic/', arabic_view, name='arabic'),                                          # Arabic page
    path('newsletter/', newsletter_view, name='newsletter'),                              # Newsletter page
    path('careers/', careers_view, name='careers'),                                       # Careers page
    path('inquiry/', inquiry_view, name='inquiry'),                                       # Inquiry page
    path('cookie-policy/', cookie_policy_view, name='cookie_policy'),                     # Cookie Policy page
    path('videos/', VideoListView.as_view(), name='video_list'),                          # Video list
    path('video/<int:pk>/', VideoDetailView.as_view(), name='video_detail'),              # Video detail
    path('inquiry-form/', inquiry_form, name='inquiry_form'),                             # Inquiry form page
    path('videos/', video_view, name='videos'),                                           # Video page
    path('form/', form_view, name='form_view_name'),                                      # Form page
    path('videos/<int:page>/', VideoPageView.as_view(), name='video_page'),               # Video page
    path('videos/', VideoPageView.as_view(), name='video_page'),                          # Video page
    path('building/', BuildingView.as_view(), name='building'),                           # Building page
    path('retail/', RetailView.as_view(), name='retail'),                                 # Retail page
    path('bank/', BankView.as_view(), name='bank'),                                       # Bank page
    path('school/', SchoolView.as_view(), name='school'),                                 # School page
    path('shopping/', ShoppingView.as_view(), name='shopping'),                           # Shopping page
    path('hospital/', HospitalView.as_view(), name='hospital'),                           # Hospital page
    path('hotel/', HotelView.as_view(), name='hotel'),                                    # Hotel page
    path('stadium/', StadiumView.as_view(), name='stadium'),                              # Stadium page
    path('warehouse/', WarehouseView.as_view(), name='warehouse'),                        # Warehouse page
    path('smart-intrusion-prevention/', SmartIntrusionPreventionView.as_view(), name='smart_intrusion_prevention'),  # Smart Intrusion Prevention page
    path('categories/', CategoryListView.as_view(), name='products'),                     # category list
    path('categories/', category_list, name='category_list'),                             # category list
    path('category/<slug:slug>/', ProductListView.as_view(), name='product_list'),        # Product list
    path('product/<int:pk>/', ProductDetailView.as_view(), name='product_detail'),        # Product detail
    path('blogges/', blogges_list, name='blogges_list'),                                  # Blog page
]    

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)