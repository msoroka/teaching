<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
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
            "id"    => "1",
            "slug"  => "post-1",
            "title" => "Post 1",
        ],
        [
            "id"    => "2",
            "slug"  => "post-2",
            "title" => "Post 2",
        ],
    ];

    /**
     * @param Request $request
     * @param int $page
     * @return JsonResponse
     * @Route("/{page}", name="blog_list", defaults={"page" = 1})
     */
    public function list(Request $request, $page = 1): JsonResponse
    {
        $limit = $request->get("limit", "10");

        return $this->json(
            [
                "page"  => $page,
                "limit" => $limit,
                "data"  => self::POSTS,
            ],
            200
        );
    }

    /**
     * @param $id
     * @return JsonResponse
     * @Route("/post/{id}", name="blog_id", requirements={"id"="\d+"})
     */
    public function post($id): JsonResponse
    {
        return $this->json(
            [
                "data" => self::POSTS[array_search($id, array_column(self::POSTS, "id"))],
            ],
            200
        );
    }

    /**
     * @param $slug
     * @return JsonResponse
     * @Route("/post/{slug}", name="blog_by_slug ")
     */
    public function postBySlug($slug): JsonResponse
    {
        return $this->json(
            [
                "data" => self::POSTS[array_search($slug, array_column(self::POSTS, "slug"))],
            ],
            200
        );
    }
}