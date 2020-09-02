<?php declare(strict_types=1);

namespace Swag\CustomCmsElement\Tests;

use Shopware\Core\Framework\Test\TestCaseBase\IntegrationTestBehaviour;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Finder\Finder;

class UsedClassesAvailableTest extends TestCase
{
    use IntegrationTestBehaviour;

    public function testClassesAreInstantiable(): void
    {
        $namespace = str_replace('Tests', '', __NAMESPACE__);

        $files = $this->getPluginClasses();
        foreach ($files as $file) {
            if (!preg_match('/.*.php$/', $file->getRelativePathname())) {
                continue;
            }

            $classRelativePath = str_replace(['.php', '/'], ['', '\\'], $file->getRelativePathname());

            $this->getMockBuilder($namespace . '\\' . $classRelativePath)
                ->disableOriginalConstructor()
                ->getMock();
        }

        // Nothing broke so far, classes seem to be instantiable
        static::assertCount(20, $files);
    }

    private function getPluginClasses(): Finder
    {
        $finder = new Finder();
        $finder->in(realpath(__DIR__ . '/../src'));
        $finder->exclude('Test');

        return $finder->files()->name('/.*\.(js|php|css|svg|jpg|twig|scss)$/');
    }
}
