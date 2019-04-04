<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class BlogController
 * @package App\Controller
 * @Route("/blog")
 */
class BlogController extends AbstractController
{
    private const POSTS = [
        [
            "id" => "1",
            "slug" => "post-1",
            "title" => "Post 1",
        ],
        [
            "id" => "2",
            "slug" => "post-2",
            "title" => "Post 2",
        ],
    ];

    /**
     * @param $page
     * @return JsonResponse
     * @Route("/{page}", name="blog_list", defaults={"page" = 1})
     */
    public function list($page = 1): JsonResponse
    {
        return new JsonResponse([
            "page" => $page,
            "data" => self::POSTS
        ]);
    }

    /**
     * @param $id
     * @return JsonResponse
     * @Route("/post/{id}", name="blog_id", requirements={"id"="\d+"})
     */
    public function post($id): JsonResponse
    {
        return new JsonResponse([
            "data" => self::POSTS[array_search($id, array_column(self::POSTS, "id"))]
        ]);
    }

    /**
     * @param $slug
     * @return JsonResponse
     * @Route("/post/{slug}", name="blog_by_slug ")
     */
    public function postBySlug($slug): JsonResponse
    {
        return new JsonResponse(
            self::POSTS[array_search($slug, array_column(self::POSTS, "slug"))]
        );
    }
}